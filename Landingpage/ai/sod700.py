import numpy as np

class SimpleNeuron:
    def __init__(self):
        self.threshold = 699
    
    def set_threshold(self, b):
        if 700 < b <= 1000:
            return 749
        return self.threshold
    
    def set_threshold(self, b):
        if 1000 < b <= 1200:
            return 799
        return self.threshold
    
    def set_threshold(self, b):
        if b > 1200:
            return 849
        return self.threshold
    
    def activate(self, x):
        thresholds = np.array([self.set_threshold(b) for _, b in x])
        inputs = np.array([a for a, _ in x])
        return np.where(inputs > thresholds, 1, 0)
    
    def predict(self, x):
        activations = self.activate(np.array(x))
        return ['1' if a == 1 else '0' for a in activations]

# Example usage
neuron = SimpleNeuron()
input_array = [[750, 1100],[800, 100], [200, 1100], [500, 1300], [800, 1100], [700, 950]]
predictions = neuron.predict(input_array)

print(predictions)
