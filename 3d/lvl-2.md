---
sidebar_position: 2
---

import KeyButton from '@site/src/components/KeyButton';

# LVL 2

:::info[How-to]
- Start a new project
- Navigate yourself
- Move, rotate, scale objects
- Work in multiple sessions
:::

---

## Start the 3D modeling

Coming from the previous lesson, you just need to click the **General** button or even click outside the pop-up to start modeling in Blender.

![Start_Blender_Project](/img/3d/Start_Blender_Project.png)

## Navigation

Now you can see the default cube that Blender provides as a starting point in every new project. The question is: **how do you view it from different angles and distances?**

:::note
<KeyButton keyName="mouse_scroll" text="Hold to rotate around" />
<KeyButton keyName="mouse_scroll_vertical" text="Scroll to zoom in and out" />
<KeyButton keyName="keyboard_shift" secondKeyName="mouse_scroll" text="Hold to move around" />
:::

## Object Transformations

:::warning
Make sure the cube is selected and active. It should have an orange outline in the viewport.

To make it active, click on it in the viewport or select it in the **Outliner**.
:::

![Component_Blender_Outliner](/img/3d/Component_Blender_Outliner.png)

### Move the cube

:::note
<KeyButton keyName="keyboard_g" text="Press and move in any direction" />
<KeyButton keyName="keyboard_g" secondKeyName="keyboard_x" text="Press and move left/right" />
<KeyButton keyName="keyboard_g" secondKeyName="keyboard_y" text="Press and move forward/backward" />
<KeyButton keyName="keyboard_g" secondKeyName="keyboard_z" text="Press and move up/down" />
:::

### Rotate the cube

:::note
<KeyButton keyName="keyboard_r" text="Press and rotate in any direction" />
<KeyButton keyName="keyboard_r" secondKeyName="keyboard_x" text="Press and rotate along X" />
<KeyButton keyName="keyboard_r" secondKeyName="keyboard_y" text="Press and rotate along Y" />
<KeyButton keyName="keyboard_r" secondKeyName="keyboard_z" text="Press and rotate along Z" />
:::

### Scale the cube

:::note
<KeyButton keyName="keyboard_s" text="Press and scale uniformly" />
<KeyButton keyName="keyboard_s" secondKeyName="keyboard_x" text="Press and scale along X" />
<KeyButton keyName="keyboard_s" secondKeyName="keyboard_y" text="Press and scale along Y" />
<KeyButton keyName="keyboard_s" secondKeyName="keyboard_z" text="Press and scale along Z" />
:::

### Gizmo

You can turn gizmos on or off for all transform tools, which will feel much more familiar for users coming from game engines. However, it is **strongly recommended to use hotkeys** instead — they are faster and more convenient once you get used to them.

![Component_Blender_Gizmo](/img/3d/Component_Blender_Gizmo.png)

## Sessions

To work on your model across multiple sessions, **save and reopen the same .blend file** until it's finished.

:::note
<KeyButton keyName="keyboard_ctrl" secondKeyName="keyboard_s" text="Press to save your project" />
<KeyButton keyName="keyboard_ctrl" secondKeyName="keyboard_o" text="Press to open your project" />
:::