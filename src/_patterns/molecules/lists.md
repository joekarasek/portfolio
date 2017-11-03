## Description

Lists are used to enumerate items. List contain a `title` value, as well as an array of `items`

### How to use

```
{% include '/molecules/lists/list.twig' with {
    title: title,
    items: items,
    classes: classes
} %}
```