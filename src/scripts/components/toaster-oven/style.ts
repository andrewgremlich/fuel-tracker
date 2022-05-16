export const styles = `
<style>
  .toaster-oven {
    visibility: hidden;
    max-width: 50px;
    height: 50px;
    margin: auto;
    background-color: var(--item-background);
    color: var(--item-color);
    text-align: center;
    border-radius: 2px;

    position: fixed;
    z-index: 1;
    left: 0;
    right:0;
    bottom: 30px;
    font-size: 17px;
    white-space: nowrap;
  }

  .icon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .desc {
    padding: 16px;
    overflow: hidden;
	  white-space: nowrap;
  }

  .active {
    visibility: visible;
    animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s, fadeout 0.5s 4.5s;
  }

  @keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
  }

  @keyframes expand {
    from {min-width: 50px}
    to {min-width: 350px}
  }

  @keyframes stay {
      from {min-width: 350px}
      to {min-width: 350px}
  }

  @keyframes shrink {
      from {min-width: 350px;} 
      to {min-width: 50px;}
  }

  @keyframes fadeout {
      from {bottom: 30px; opacity: 1;}
      to {bottom: 60px; opacity: 0;}
  }
</style>
`;
