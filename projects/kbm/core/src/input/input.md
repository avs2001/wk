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

  --input-height: 30px;
  --input-radius: 5px;
  --input-border-color: #666666;
  --input-border-size: 1px;
  --input-error-color: #FF0000;
  --input-focus-border-color: #3FA9F5;
  --input-disabled-border-color: #CCC;
  --input-font-size: 12px;
  --input-font-family: Inter, sans-serif;
```

## Checkbox

```typescript
<kbm-checkbox>Checkbox</kbm-checkbox>
<kbm-checkbox [disabled]="true">Checkbox</kbm-checkbox>
<kbm-checkbox [checked]="true">Checkbox</kbm-checkbox>

```

### Customization

```css
--kbm-checkbox-size: 20px;
--kbm-checkbox-border-radius: 4px;
--kbm-checkbox-background-color: transparent;
--kbm-checkbox-border-color: #3FA9F5;
--kbm-checkbox-background-color-checked: #3FA9F5;
--kbm-checkbox-checkmark-color: #fff;
--kbm-checkbox-font-size: 1rem;
```
