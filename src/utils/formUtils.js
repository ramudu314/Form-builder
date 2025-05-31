// Add to formUtils.js
function renderInputByType(type, component) {
  switch (type) {
    case 'range':
      return (
        <input
          type="range"
          min={component.min || 0}
          max={component.max || 100}
          className="w-full"
          required={component.required}
        />
      );
    case 'color':
      return (
        <input
          type="color"
          className="w-full h-10"
          required={component.required}
        />
      );
    default:
      return null;
  }
}