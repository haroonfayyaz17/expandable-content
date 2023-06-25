# Getting Started with Expandable Content

The Collapsible Content component is a versatile and user-friendly feature that enhances the user experience by allowing them to view and hide additional content with ease. With this component, you can present large amounts of information in a condensed format, ensuring a clean and organized interface.

By default, the component displays a summary or preview of the content, providing a concise overview to the users. When users want to explore more, they can simply click on the "See More" button, expanding the component to reveal the hidden content. This feature is particularly useful for lengthy descriptions, lists, or sections that could overwhelm the user if fully displayed at once.

To maintain a clutter-free interface and prevent content overload, the Collapsible Content component also offers a "See Less" option. By clicking on the "See Less" button, users can conveniently collapse the expanded content, returning to the summary view.

The Collapsible Content component is highly customizable, allowing you to adapt it to fit your website or application design seamlessly. You can adjust the styling, such as colors, fonts, and button placements, to ensure visual consistency and alignment with your overall user interface.

Whether you are building a blog, an e-commerce platform, or any application where managing large content blocks is crucial, the Collapsible Content component provides an elegant solution. It empowers users to explore information at their own pace while maintaining a clean and organized interface, improving the overall user experience and engagement.

## How to use it

```js
import React, { useState } from "React";
import Expandable from "expandable-content";

const Component = () => {
    const [seeMore, setSeeMore] = useState();
    <Expandable seeMore={seeMore} setSeeMore={setSeeMore} value="How are your?" length={2} />
}

```
Valid properties of the component:

| Name                                 |  Type  | Default | Description                                                                                                                                                                                                                                                                                                                                                            |
| :----------------------------------- | :----: | :-----: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **value**<br>*required*             | string |    -    | The string on which you want to add expandable(See More and See Less). |
| **seeMore**<br>*required*   | string, boolean, integer |    -    | It is the component state that will handle whether to show expanded content or partial content |
| **setSeeMore**<br>*required*   | function |    -    | It is the function that will trigger when you will either click See More or See Less. You may pass the state function in it or set the state in it|
| **length**<br>*optional*      | integer |    40    | The breakpoint length after which you want to add See More. Upon clicking see more whole text will show up.|
| **id**<br>*optional*       | string |    -    | This is a unique identifier for your component. It is helpful if you want to render this component across all rows in the table. So, content will expand only on that specific row on which user click see more.|
| **className**<br>*optional* | string |    -    | If you want to modify the properties of the expandable content you may pass any class in it |
| **onHoverEnabled**<br>*optional*        | boolean |    false    | There is an option of expanding content when user hover over see more. By default hover effect is disabled but you may use it if needed |
