# akadomorw template project

- This repo is going to host every website that we are going to host from akadomorw campaign
- each website will have its own folder
- the folder structure to use will be available in the template folder
- before you start customizing a template copy the template folder and rename it to the domain of the website

# Customize content according to company information

## For images sliding

- Insert `favicon` logo and Change `title` in `index.html`
- Change footer text in `footer.html`
- Open `script.js` file
- `images` array stores company images which will be sliding in the top section.
- Modify `images` array buy including images for a specific company.

- Open `script.js` file
- `serviceImages` array stores service images which will be sliding in the service section.
- Modify `serviceImages` array buy including images for a specific company.

## For Content

- Open `script.js` file
- For every variable include information for specific company
- In `images` folder remove all images and insert the images you are going to use
- When adding `whatsapp` link follow this format `https://wa.me/<phone number>` phone number must be in international standard.You will find an example in `script.js` file, on social medias links section.

## Change the background color
- Open `style.css` file
- Find a class named `common-bg-color` and change the backgound color according to company color.
- When changing the backgournd color remember also to update `social-icons:hover` color in order to make social links more common with the background.
