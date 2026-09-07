# Page templates

## Product template

Use `product-template.html` when creating a new product category or featured
product page. The template already includes the shared header, footer,
responsive layout, buttons, similar-product cards, and detailed product
sections.

### Creating a product page

1. Copy `templates/product-template.html` to the repository root and give it a
   descriptive filename, such as `products-metal-flashing.html`.
2. Update the `<title>` and meta description.
3. Replace every `TODO` and placeholder name with the real product content.
4. Update the image paths under `images/products/` and write descriptive
   `alt` text for each image.
5. Update the product price, overview, details, benefits, and related-product
   links.
6. Add the new page to the main navigation in the copied header if visitors
   should be able to reach it from every page.
7. Add a link to the new page on `index.html` so it appears in the home page's
   **What we stock** section.

The page should keep these stylesheet links:

```html
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/products.css">
```

`products.css` supplies the reusable classes used by the template:
`.product-hero`, `.similar-products`, `.similar-product-card`,
`.product-details`, `.detail-card`, and related classes. Keep the class names
when adding or rearranging sections so the existing responsive styles continue
to work.

## Adding the page to the main page

Open `index.html` and add another link inside the existing `.category-grid`
element:

```html
<a class="category-card" href="products-metal-flashing.html">
  <h3>Metal Flashing</h3>
  <p>Metal accessories and flashing products for dependable roofing work.</p>
</a>
```

The `category-card` class gives the new link the same appearance and spacing
as the existing Shingles, Commercial Products, and Accessories cards. The
home page grid automatically creates another row when more cards are added;
no additional CSS is needed.

## Keeping links consistent

When adding a page to the main navigation, update the navigation in every
existing HTML page and in `templates/header-footer.html`. This project has no
include system, so header and footer changes do not propagate automatically.

