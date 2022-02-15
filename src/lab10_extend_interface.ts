// extend interface // ke thua interface
export {};
interface Button {
  label: string;
  onClick: () => void; // ham callback
}
const button: Button = {
  label: 'Submit',
  onClick: () => {
    console.log('click');
  },
};

interface IconButton extends Button {
  icon: string;
}
const addToCartBtn: IconButton = {
  label: 'Submit',
  onClick: () => {
    console.log('click');
  },
  icon: 'cart-icon',
};
