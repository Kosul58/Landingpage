import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np 
import matplotlib.pyplot as plt

import json

# Path to the JSON file
file_path = './Traindata/Modeldata/diabities0.json'

# Read the JSON data from the file
with open(file_path, 'r') as file:
    data = json.load(file)

# Print the data
print(len(data))


# Check if GPU is available and set device accordingly
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')


# xdata = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

# ydata = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200]
# plt.figure(1)
# plt.plot(xdata, ydata , ydata , xdata )


# plt.figure(2)
# plt.scatter(xdata, ydata )
# plt.show()

# Define the MLP model
class MLP(nn.Module):
    def __init__(self):
        super(MLP, self).__init__()
        self.fc1 = nn.Linear(10, 64)  # Input layer to first hidden layer
        self.fc2 = nn.Linear(64, 32)  # First hidden layer to second hidden layer
        self.fc3 = nn.Linear(32, 32)   
        self.fc4 = nn.Linear(32, 1)
        self.sigmoid = nn.Sigmoid()   # Sigmoid activation for binary classification

    def forward(self, x):
        x = torch.relu(self.fc1(x))   # Apply ReLU activation
        x = torch.relu(self.fc2(x))   
        x = torch.relu(self.fc3(x))
        x = self.sigmoid(self.fc4(x)) # Apply sigmoid activation
        return x

# Instantiate the model and move it to the GPU
model = MLP().to(device)

# Define the loss function and optimizer
criterion = nn.BCELoss()  # Binary Cross Entropy Loss
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training parameters
num_epochs = 2000
batch_size = 5

#Training Data
#for all health values in the dataset == 0 [D=0,L=0,H=0,F=0]
x1 = [600, ]
y1 = []

# Training loop
for epoch in range(num_epochs):
    model.train()
    running_loss = 0.0
    correct = 0
    total = 0
    
    # Generate a batch of data
    inputs, targets =x1 , y1
    
    # Move data to the GPU
    inputs, targets = inputs.to(device), targets.to(device)
    
    # Forward pass
    outputs = model(inputs)
    loss = criterion(outputs, targets)
    
    # Backward pass and optimization
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
    
    # Compute loss
    running_loss += loss.item()
    
    # Compute accuracy
    predicted = outputs.round()  # Round to get binary predictions
    total += targets.size(0)
    correct += (predicted == targets).sum().item()
    
    accuracy = 100 * correct / total
    
    # Print loss and accuracy for this epoch
    print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {running_loss:.4f}, Accuracy: {accuracy:.2f}%')

print("Training complete!")
