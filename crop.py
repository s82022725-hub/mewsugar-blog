from PIL import Image
im = Image.open(r'C:\Users\User\.gemini\antigravity\brain\860d7e98-7b24-4fd5-9dec-e0d1a047e1b4\.user_uploaded\media_1788417674212.jpg')
width, height = im.size
size = 400
left = (width - size)/2
top = (height - size)/2 - 30 # slight adjust upwards to avoid text if any
right = (width + size)/2
bottom = (height + size)/2 - 30
im_cropped = im.crop((left, top, right, bottom))
im_cropped.save(r'C:\Users\User\Desktop\mewsugar-blog\public\favicon.jpg')
