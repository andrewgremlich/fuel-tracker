export const styles = `
<style>
  .toaster-oven {
    visibility: hidden;
    width: 300px;
    height: 50px;
    margin: auto;
    padding: 15px;
    background-color: var(--item-background);
    color: var(--item-color);
    border-radius: 20px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    position: fixed;
    z-index: 1;
    left: 0;
    right:0;
    bottom: -100px;
    font-size: 18px;
  }

  .icon {
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active {
    visibility: visible;
    animation: slidein 5s;
  }

  @keyframes slidein {
    0% {bottom: -100px; opacity: 0;}
    10% {bottom: 30px; opacity: 1;}
    90% {bottom: 30px; opacity: 1;}
    100% {bottom: -100px; opacity: 0;}
  }
  </style>
  `;
