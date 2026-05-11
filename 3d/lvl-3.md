---
sidebar_position: 3
---

import KeyButton from '@site/src/components/KeyButton';

# LVL 3

:::info[How-to]
- Cancel transformations of an object
- Turn the cube into an egg
:::

---

## Reset object transformations

After completing the previous LVL, your cube likely looks like a mess of chaotically scaled and rotated geometry. Before starting this LVL, **reset the cube** to its original form.

:::note
<KeyButton keyName="keyboard_alt" comboKeys={["keyboard_g"]} text="Cancel movement" />
<KeyButton keyName="keyboard_alt" comboKeys={["keyboard_r"]} text="Cancel rotation" />
<KeyButton keyName="keyboard_alt" comboKeys={["keyboard_s"]} text="Cancel scaling" />
:::

## Let's make an egg

A LOT of Blender tutorials try to push multiple concepts on a newbie's plate. 

Most of the people repeat the process like 🐵monkeys and never TRULY learn what they've done. It's better to **take things slowly and methodically**.

### Basic Shape

Half of the success of a good model is baked into the selection of the basic shape: **the closer it is to the final model, the better**.

```pseudo title="Imagine an egg: it has 3 lines that drive the geometry's structure"
     ........       <-- top of the egg has the smallest area ~0.8x of the base
   .'        '.
  :            :
 /              \
:                :
:................:  <-- middle of the egg has the largest area ~4x of the base
 \              /
  '............'    <-- bottom of the egg is the base area
```

Now we need to replicate those same principles within the geometry of our cube.

### Edit it!

The challenge right now is the **difference between the number of horizontal areas** in the cube and in our egg reference: the cube has only 2, while the egg has 3.

To cut a line through the middle of the cube, we need to enter **Edit Mode** — a space in Blender specially designed for working with geometry at different levels of detail.

:::note
<KeyButton keyName="keyboard_tab" text='Enter "Edit Mode" for the selected object' />
:::

![Mode_Blender_Edit](/img/3d/Mode_Blender_Edit.png)
*You should now see that Blender is in **Edit Mode***

---

Notice that each corner of the cube has a little sphere — this means you are in vertex editing mode.

:::info
Blender allows you to edit an object's geometry at 3 different levels of detail (a.k.a. Select Modes):
- Vertices (a.k.a. little spheres)
- Edges (a.k.a. sides)
- Faces (a.k.a. areas)
:::

You can quickly switch between those levels using the hotkeys:

:::note
<KeyButton keyName="keyboard_1" text="Press to edit Vertices" />
<KeyButton keyName="keyboard_2" text="Press to edit Edges" />
<KeyButton keyName="keyboard_3" text="Press to edit Faces" />
:::

You will also see the active **Select Mode** at the top left corner of the HUD. 

![Component_Blender_EditLevel](/img/3d/Component_Blender_EditLevel.png)

### Cut it!

Logically, you always need to cut along a particular edge, so **switch to edges and select one** of the vertical edges to prepare for the cut.

![Component_Blender_Edge](/img/3d/Component_Blender_Edge.png)
*The selected edge should become highlighted*

To cut exactly in the middle, you will need to **perform the set of operations in a strict order:**

:::note[Combo "Cut"]
<KeyButton keyName="keyboard_ctrl" comboKeys={["keyboard_r", "mouse_left"]} text="Place the cut" />
<KeyButton keyName="mouse_right" text="Cancel the grab operation for the new edge" />
:::

![Component_Blender_Cut](/img/3d/Component_Blender_Cut.png)
*Now our cube has 3 horizontal areas, just like the egg reference*

### Transform it!

:::info
All the transformation functions you learnt in LVL 2 are applicable to any vertex, edge, or face while in **Edit Mode**.
:::

Now we can implement the details for each section of the egg reference. Again, follow these steps in **strict order**.

:::note[Combo "Top"]
<KeyButton keyName="keyboard_3" text='Enter "Face" selection mode' />
<KeyButton keyName="mouse_left" text='Select the top face of the cube' />
<KeyButton keyName="keyboard_s" comboKeys={["keyboard_period", "keyboard_8", "mouse_left"]} text="Scale down the face" />
<KeyButton keyName="keyboard_g" comboKeys={["keyboard_z", "keyboard_5", "mouse_left"]} text="Move up the face" />
:::

![Stage_Egg_TransformTop](/img/3d/Stage_Egg_TransformTop.png)
*The top of the egg is now in the correct position and scaled according to the reference*

:::note[Combo "Mid"]
<KeyButton keyName="keyboard_2" text='Enter "Edge" selection mode' />
<KeyButton keyName="keyboard_alt" comboKeys={["mouse_left"]} text='Select the edge loop in the middle' />
<KeyButton keyName="keyboard_s" comboKeys={["keyboard_4", "mouse_left"]} text="Scale up the edge loop" />
:::

![Stage_Egg_TransformMid](/img/3d/Stage_Egg_TransformMid.png)
*The middle of the egg is now scaled according to the reference*

:::note[Combo "Bottom"]
<KeyButton keyName="keyboard_3" text='Enter "Face" selection mode' />
<KeyButton keyName="mouse_left" text='Select the bottom face of the cube' />
<KeyButton keyName="keyboard_g" comboKeys={["keyboard_z", "keyboard_minus", "keyboard_1"]} text="Move down the face" />
:::

![Stage_Egg_TransformBot](/img/3d/Stage_Egg_TransformBot.png)
*The bottom of the egg is now in the correct position according to the reference*

### Modify it!

The time has come for some *Blender Magic*. The app features many pre-built functions that allow you to modify your geometry in various mathematical and geometric ways.

For now, we just need to apply a single modifier called **Subdivision Surface** to turn our extremely low-poly egg into something rounder and more detailed.

:::note[Combo "Subdivision"]
<KeyButton keyName="keyboard_tab" text='Return to the "Object Mode"' />
<KeyButton keyName="keyboard_ctrl" comboKeys={["keyboard_3"]} text="Subdivide the cube into an egg" />
:::

![Stage_Egg_Cooked](/img/3d/Stage_Egg_Cooked.png)
*You've cooked the egg!*

However, in real life, eggs are very smooth, so we need to apply one more combo before we're done.

:::note[Combo "Smoothing"]
<KeyButton keyName="mouse_right" text='Open menu of the egg' />
<KeyButton keyName="mouse_left" text='Click on "Shade Smooth" option' />
:::

![Stage_Egg_Smooth](/img/3d/Stage_Egg_Smooth.png)
*Now, it's truly a realistic egg*

### Save it!

Don't lose your progress. Save your work, either in the current project or as a new one.

:::note
<KeyButton keyName="keyboard_ctrl" comboKeys={['keyboard_s']} text="Save as the current project" />
<KeyButton keyName="keyboard_ctrl" comboKeys={['keyboard_shift', 'keyboard_s']} text="Save as a new project" />
:::