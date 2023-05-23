## Inputs

### Usage

```typescript
 <kbm-input-group> 
    <label kbmLabel>Input disabled</label> 
    <input type="text" kbmInput>
</kbm-input-group>
```
### Customization

```css

:root {
    --kbm-input-height: 30px;
    --input-radius: 5px;
    --input-border-color: #666666;
    --input-border-size: 1px;
    --input-error-color: #FF0000;
    --input-focus-border-color: #3FA9F5;
    --input-disabled-border-color: #CCC;
    --input-font-size: 12px;
    --input-font-family: Inter, sans-serif;
    --kbm-input-background: transparent;
}
```

## Checkbox

```html
<kbm-checkbox>Checkbox</kbm-checkbox>
<kbm-checkbox [disabled]="true">Checkbox</kbm-checkbox>
<kbm-checkbox [checked]="true">Checkbox</kbm-checkbox>
```

### Checkbox Customization

```css
:root {
    --kbm-checkbox-size: 20px;
    --kbm-checkbox-border-radius: 4px;
    --kbm-checkbox-background-color: transparent;
    --kbm-checkbox-border-color: #3FA9F5;
    --kbm-checkbox-background-color-checked: #3FA9F5;
    --kbm-checkbox-checkmark-color: #fff;
    --kbm-checkbox-font-size: 1rem;
}
```

## Radio

### Usage

```html
<kbm-radio>Radio</kbm-radio>
<kbm-radio [disabled]="true">Radio</kbm-radio>
<kbm-radio [checked]="true">Radio</kbm-radio>
``` 

### Customization

```css
:root {
  --kbm-radio-size: 24px;
  --kbm-radio-font-size: inherit;
  --kbm-radio-background-color: transparent;
  --kbm-radio-border-color: #3FA9F5;
  --kbm-radio-disabled-background-color: #E4EBF4;
  --kbm-radio-disabled-border-color: #CCC;
}
```
