const PRODUCTS = {
  "shingles-bp": {
    name: "BP",
    category: "Shingles",
    categoryUrl: "products-shingles.html",
    image: "images/products/shingles-bp.jpg",
    description: "Residential asphalt shingles selected for dependable coverage and straightforward installation.",
    overview: "BP shingles give contractors a practical residential roofing option with the material availability and everyday performance needed for replacement and new-build work.",
    details: "Ask our team about current colours, profiles, quantities, and matching accessories for your next roofing project.",
    related: ["shingles-gaf", "shingles-owens-corning", "shingles-certainteed"]
  },
  "shingles-gaf": {
    name: "GAF",
    category: "Shingles",
    categoryUrl: "products-shingles.html",
    image: "images/products/shingles-gaf.jpg",
    description: "Residential asphalt shingles for durable, professional-looking roofing systems.",
    overview: "GAF shingles are a familiar choice for contractors who need dependable residential roofing materials across a range of common applications.",
    details: "Contact Silverstar for product availability, colour options, and the accessory materials needed to complete the roof system.",
    related: ["shingles-bp", "shingles-iko-cambridge", "shingles-iko-dynasty"]
  },
  "shingles-owens-corning": {
    name: "Owens Corning",
    category: "Shingles",
    categoryUrl: "products-shingles.html",
    image: "images/products/shingles-owens-corning.jpg",
    description: "Residential shingles that combine reliable weather coverage with a clean finished appearance.",
    overview: "Owens Corning shingles support residential roofing work where consistent materials, attractive profiles, and dependable coverage matter.",
    details: "Tell us the roof size and preferred profile so we can help prepare a wholesale quote.",
    related: ["shingles-bp", "shingles-gaf", "shingles-certainteed"]
  },
  "shingles-certainteed": {
    name: "CertainTeed",
    category: "Shingles",
    categoryUrl: "products-shingles.html",
    image: "images/products/shingles-certainteed.jpg",
    description: "Residential roofing shingles for contractors looking for trusted, consistent materials.",
    overview: "CertainTeed shingles offer a reliable option for residential roof replacements and new installations, backed by a broad product range.",
    details: "Request current stock and pricing from our team before scheduling your next material pickup.",
    related: ["shingles-bp", "shingles-owens-corning", "shingles-iko-cambridge"]
  },
  "shingles-iko-cambridge": {
    name: "IKO Cambridge",
    category: "Shingles",
    categoryUrl: "products-shingles.html",
    image: "images/products/shingles-iko-cambridge.jpg",
    description: "A popular architectural shingle profile for residential roofing projects.",
    overview: "IKO Cambridge shingles provide a dimensional residential roofing option suited to contractors who want a finished architectural look.",
    details: "Contact Silverstar for current colours, bundle quantities, and compatible roofing accessories.",
    related: ["shingles-iko-dynasty", "shingles-bp", "shingles-gaf"]
  },
  "shingles-iko-dynasty": {
    name: "IKO Dynasty",
    category: "Shingles",
    categoryUrl: "products-shingles.html",
    image: "images/products/shingles-iko-dynasty.jpg",
    description: "A high-performance architectural shingle option for demanding residential applications.",
    overview: "IKO Dynasty shingles are designed for contractors seeking a robust, dimensional shingle choice for residential roofing work.",
    details: "Ask about available colours, order quantities, and the complete system materials for your project.",
    related: ["shingles-iko-cambridge", "shingles-gaf", "shingles-certainteed"]
  },
  "commercial-cap-app": {
    name: "Cap-APP",
    category: "Commercial",
    categoryUrl: "products-commercial.html",
    image: "images/products/commercial-cap-app.jpg",
    description: "APP-modified cap membrane for commercial roofing systems.",
    overview: "Cap-APP is supplied for commercial roofing applications where a durable cap membrane is part of the specified roof assembly.",
    details: "Share your system specifications with our team so we can confirm availability and prepare a quote.",
    related: ["commercial-cap-tp250", "commercial-base-tf95", "commercial-protecoboard"]
  },
  "commercial-cap-tp250": {
    name: "Cap-TP250",
    category: "Commercial",
    categoryUrl: "products-commercial.html",
    image: "images/products/commercial-cap-tp250.jpg",
    description: "Commercial cap membrane for dependable multi-layer roofing assemblies.",
    overview: "Cap-TP250 supports commercial roofing crews building systems that require a dependable finished membrane layer.",
    details: "Confirm the required roll quantities and system compatibility with our wholesale counter team.",
    related: ["commercial-cap-app", "commercial-base-tf95", "commercial-fibreboard"]
  },
  "commercial-base-tf95": {
    name: "Base-TF95",
    category: "Commercial",
    categoryUrl: "products-commercial.html",
    image: "images/products/commercial-base-tf95.jpg",
    description: "Base membrane material for commercial roofing system assemblies.",
    overview: "Base-TF95 is intended for commercial roofing applications where a reliable base layer helps create a complete membrane system.",
    details: "Send us the roof system requirements and quantities for current stock and wholesale pricing.",
    related: ["commercial-cap-app", "commercial-cap-tp250", "commercial-protecoboard"]
  },
  "commercial-protecoboard": {
    name: "ProtecoBoard",
    category: "Commercial",
    categoryUrl: "products-commercial.html",
    image: "images/products/commercial-protecoboard.jpg",
    description: "Protection board for commercial roofing and insulation assemblies.",
    overview: "ProtecoBoard helps provide a protective layer within commercial roof assemblies and is available for contractor and wholesale orders.",
    details: "Contact us with your system design and board quantities so we can help confirm the right material.",
    related: ["commercial-fibreboard", "commercial-base-tf95", "commercial-others"]
  },
  "commercial-fibreboard": {
    name: "FibreBoard",
    category: "Commercial",
    categoryUrl: "products-commercial.html",
    image: "images/products/commercial-fibreboard.jpg",
    description: "Fibreboard for commercial roofing protection and assembly needs.",
    overview: "FibreBoard is a practical component for commercial roofing work where a durable cover or protection board is required.",
    details: "Ask our team about available thicknesses, quantities, and compatible commercial roofing materials.",
    related: ["commercial-protecoboard", "commercial-base-tf95", "commercial-cap-app"]
  },
  "commercial-others": {
    name: "Other Commercial Materials",
    category: "Commercial",
    categoryUrl: "products-commercial.html",
    image: "images/products/commercial-others.jpg",
    description: "Additional commercial roofing materials available through our wholesale counter.",
    overview: "Our commercial inventory includes supporting materials for roofing systems beyond the primary cap, base, and board products listed here.",
    details: "If you do not see a specific material, contact us with the product name or specification and we will check availability.",
    related: ["commercial-cap-app", "commercial-protecoboard", "commercial-fibreboard"]
  },
  "accessories-tools": {
    name: "Tools",
    category: "Accessories",
    categoryUrl: "products-accessories.html",
    image: "images/products/accessories-tools.jpg",
    description: "Roofing tools and jobsite essentials for professional crews.",
    overview: "Our roofing tool selection is intended to support the day-to-day needs of contractors working on residential and commercial projects.",
    details: "Ask about current brands, sizes, and quantities available for pickup or wholesale order.",
    related: ["accessories-roofing", "accessories-underlayment", "accessories-vents"]
  },
  "accessories-roofing": {
    name: "Roofing Accessories",
    category: "Accessories",
    categoryUrl: "products-accessories.html",
    image: "images/products/accessories-roofing.jpg",
    description: "Supporting materials that help complete residential and commercial roofing systems.",
    overview: "Roofing accessories fill the practical gaps between the primary roofing material and a finished, weather-ready installation.",
    details: "Send us your material list and we can help confirm the accessories needed for the job.",
    related: ["accessories-tools", "accessories-underlayment", "accessories-metal"]
  },
  "accessories-underlayment": {
    name: "Underlayment",
    category: "Accessories",
    categoryUrl: "products-accessories.html",
    image: "images/products/accessories-underlayment.jpg",
    description: "Underlayment products that add a protective layer beneath the finished roof covering.",
    overview: "Underlayment supports a complete roofing system by helping protect the deck beneath shingles and other roof coverings.",
    details: "Contact us for current rolls, product options, and quantities for your next installation.",
    related: ["accessories-underlayment-pro", "accessories-roofing", "accessories-metal"]
  },
  "accessories-metal": {
    name: "Metal Accessories",
    category: "Accessories",
    categoryUrl: "products-accessories.html",
    image: "images/products/accessories-metal.jpg",
    description: "Metal components for roof edges, transitions, flashing, and finishing details.",
    overview: "Metal accessories provide the flashing and finishing components needed to help manage water at important roof transitions.",
    details: "Share your measurements or material list with our team for help confirming the right components.",
    related: ["accessories-roofing", "accessories-vents", "accessories-downspouts"]
  },
  "accessories-vents": {
    name: "Vents",
    category: "Accessories",
    categoryUrl: "products-accessories.html",
    image: "images/products/accessories-vents.jpg",
    description: "Roof ventilation products for balanced, practical roof systems.",
    overview: "Roof vents help contractors complete ventilation plans for residential and commercial roofing projects.",
    details: "Ask about available vent styles, quantities, and compatible roofing materials.",
    related: ["accessories-downspouts", "accessories-metal", "accessories-roofing"]
  },
  "accessories-downspouts": {
    name: "Downspouts",
    category: "Accessories",
    categoryUrl: "products-accessories.html",
    image: "images/products/accessories-downspouts.jpg",
    description: "Downspout components for reliable roof drainage systems.",
    overview: "Downspouts support complete roof drainage by carrying collected water away from the building and foundation.",
    details: "Contact Silverstar for available sizes, finishes, and quantities for your project.",
    related: ["accessories-vents", "accessories-metal", "accessories-roofing"]
  }
};

const page = document.querySelector("[data-product-page-content]");
const product = PRODUCTS[document.body.dataset.product];

if (page && product) {
  const related = product.related
    .map((id) => PRODUCTS[id])
    .filter(Boolean)
    .map((item, index) => `<a class="similar-product-card" href="product-${product.related[index]}.html">
      <img src="${item.image}" alt="${item.name}">
      <div><h3>${item.name}</h3><p>Explore this related ${item.category.toLowerCase()} product.</p></div>
    </a>`)
    .join("");

  page.innerHTML = `
    <section class="product-hero">
      <div class="container product-hero__inner">
        <div class="product-hero__copy">
          <p class="section-label">${product.category}</p>
          <h1>${product.name}</h1>
          <p class="product-hero__lede">${product.description}</p>
          <div class="product-hero__actions">
            <a class="btn btn--primary" href="contact.html">Request a quote</a>
            <a class="btn btn--secondary" href="${product.categoryUrl}">Back to ${product.category}</a>
          </div>
        </div>
        <div class="product-hero__media"><img src="${product.image}" alt="${product.name}" width="480" height="360"></div>
      </div>
    </section>
    <section class="product-similar"><div class="container">
      <p class="section-label">Similar products</p>
      <div class="similar-products">${related}</div>
    </div></section>
    <main id="product-details" class="product-details"><div class="container product-details__inner">
      <article class="detail-card detail-card--image-left">
        <div class="detail-card__media"><img src="${product.image}" alt="${product.name} product detail"></div>
        <div class="detail-card__content"><p class="section-label">Overview</p><h2>Built for dependable roofing work</h2><p>${product.overview}</p></div>
      </article>
      <article class="detail-card detail-card--image-right">
        <div class="detail-card__content"><p class="section-label">Details</p><h2>Wholesale support from Silverstar</h2><p>${product.details}</p></div>
        <div class="detail-card__media"><img src="${product.image}" alt="${product.name} in a roofing supply setting"></div>
      </article>
    </div></main>`;
}
