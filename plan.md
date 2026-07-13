# Soap Store Frontend Flow & Architecture (Phase 1)

## Objective

Build a simple, responsive e-commerce website where customers can browse handmade soaps, add products to a cart, and place their order through WhatsApp instead of using an online payment gateway.

---

# User Journey

```text
Home
│
├── Browse soaps
│
├── View product details
│
├── Add products to cart
│
├── Review cart
│
└── Order via WhatsApp
```

The customer should be able to complete an order without creating an account or making an online payment.

---

# Application Structure

```text
app/
│
├── layout.tsx
├── page.tsx
│
├── soaps/
│   └── [id]/
│       └── page.tsx
│
├── cart/
│   └── page.tsx
│
└── not-found.tsx

components/
│
├── Header.tsx
├── Footer.tsx
├── SoapCard.tsx
├── QuantitySelector.tsx
├── CartItem.tsx
├── Hero.tsx
└── Button.tsx

context/
└── CartContext.tsx

types/
└── soap.ts
```

---

# Shared Layout

Every page shares the same layout.

```text
+-----------------------------------+
| Fixed Header                      |
+-----------------------------------+

          Page Content

+-----------------------------------+
| Footer                            |
+-----------------------------------+
```

## Header

* Logo
* Home
* Cart
* Cart item badge

## Footer

* Business information
* Contact details
* Social links
* Copyright

---

# Home Page

Purpose:

* Introduce the business
* Display all available soaps
* Allow customers to immediately add products to their cart

Example layout:

```text
Hero Banner

Handmade Natural Soaps

[Browse Collection]

-----------------------------

Product Grid

[Soap Card]
[Soap Card]
[Soap Card]

-----------------------------

Footer
```

---

# Soap Card

Initial state:

```text
+----------------------+
| Image                |
|                      |
| Lavender Soap        |
| ₹150                 |
|                      |
| [Details]            |
| [Add to Cart]        |
+----------------------+
```

After adding to cart:

```text
+----------------------+
| Image                |
|                      |
| Lavender Soap        |
| ₹150                 |
|                      |
| [Details]            |
|   [-] 2 [+]          |
+----------------------+
```

The quantity selector replaces the "Add to Cart" button once the item has been added.

---

# Product Details Page

Displays complete product information.

Layout:

```text
Product Image

Product Name

Description

Price

Quantity

[-] 1 [+]

[Add to Cart]
```

This page allows customers to:

* View larger product images
* Read the description
* Select quantity
* Add the product to their cart

---

# Cart

The cart is maintained entirely on the client using React Context API.

Responsibilities:

* Store selected products
* Track quantities
* Calculate totals
* Update the cart badge
* Generate the WhatsApp order

No backend storage is required during Phase 1.

---

# Cart Page

Purpose:

* Review the order before sending it

Example:

```text
Shopping Cart

--------------------------------

Lavender Soap

[-] 2 [+]

₹300

--------------------------------

Neem Soap

[-] 1 [+]

₹120

--------------------------------

Total Items: 3

Total Price: ₹420

Customer Name (optional)

[Order via WhatsApp]
```

Customers can:

* Increase quantity
* Decrease quantity
* Remove products
* Review total price
* Send the order

---

# Cart State

Example structure:

```ts
type CartItem = {
    id: number;
    name: string;
    picture: string;
    price: number;
    quantity: number;
}
```

Context responsibilities:

* addItem()
* removeItem()
* increaseQuantity()
* decreaseQuantity()
* clearCart()
* totalItems
* totalPrice

---

# WhatsApp Order Flow

When the customer presses **Order via WhatsApp**, the application generates a formatted message.

Example:

```text
Hello,

I'd like to order:

• Lavender Soap ×2 - ₹300
• Neem Soap ×1 - ₹120

Total: ₹420

Name:

Address:

Thank you.
```

The message is URL-encoded and opened using the WhatsApp deep link.

No backend processing is required.

---

# Navigation Flow

```text
Home
│
├── Browse Products
│
├── Add to Cart
│
├── View Product Details
│
└── Continue Shopping

↓

Cart

↓

Review Order

↓

Open WhatsApp

↓

Business Receives Order
```

---

# Phase 1 API Requirements

Only two API endpoints are required.

## List Products

```
GET /api/soaps
```

Returns:

* id
* name
* picture
* price

---

## Product Details

```
GET /api/soaps/:id
```

Returns:

* id
* name
* description
* picture
* price

