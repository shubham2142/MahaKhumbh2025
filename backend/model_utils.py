import torch
from models.vgg import vgg19
from torchvision import transforms
from PIL import Image

def load_model(path):
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model = vgg19()
    model.load_state_dict(torch.load(path, map_location=device))
    model.eval()
    model.to(device)
    return model

def preprocess_image(image):
    transform = transforms.Compose([
        transforms.Resize((512, 512)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])
    return transform(image)
