export const styles = `
<style>
  :host {
    font-size: 1rem;
    font-family: sans-serif;
    color: #333;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .number-output {
    margin: 0 0.5rem;
    font-size: 2rem;
    color: var(--item-color);
  }

  .number-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .number-control {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .number-output-label {
    color: var(--item-color);
    font-size: 12px;
  }

  .number-output-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    width: 75px;
  }
</style>
`;
