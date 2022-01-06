# Data Format

The data format is a single JSON array containing individual components. Each component has the structure described below:

```js
{
  "name": "MSC", // the short name of the component. Must be unique
  "long": "Mobile Switching Center", // the full name of the component
  "type": "MSC", // the type of a component, indicating its part in the network. Common choices are MSC, NSS, BSS, UeT
  "parent": "", // the parent of a component in the hierarchy. Set to an empty string to declare as the root node, set to "sub" to hide from the hierarchy
  "responsible": "NSS", // the responsible team
  "detail": "Lorem Ipsum", // a long-form description to be displayed in the inspector
  "image": "/img/msc.png", // an image to be displayed in the inspector. can be left empty as well.
  "info": { "foo": "bar" }, // further information to be displayed in a table in the inspector
  "subcomponents": [ "foo" "bar" ] // further components, used to generate the schematic view
}
```

The fields `name`, `long`, `type`, `parent`, `detail` must be given; `responsible`, `image`, `info` and `subcomponents` are optional.

See `/dist/data.json` for a limited example of this structure.
