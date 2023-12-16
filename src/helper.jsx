export default function getCart() {
    const cartJson = window.sessionStorage.getItem("cart");
    if (cartJson === null) {
        return [];
    }
    return JSON.parse(cartJson);

}