# Banner Images

This folder contains the banner images that are automatically displayed in the HeroBanner component.

## How to Add New Images

1. **Add your images to this folder** (`src/assets/images/banner/`)
2. **Supported formats**: JPG, JPEG, PNG, GIF, SVG, WebP
3. **Naming convention**: Use simple names like `1.jpg`, `2.jpg`, `3.jpg` or descriptive names
4. **The images will be automatically detected and displayed** in the banner carousel

## Current Images

- `1.jpg` - Banner image 1
- `2.jpg` - Banner image 2  
- `IMG_2239.jpg` - Banner image 3

## Technical Details

- Images are loaded dynamically using webpack's `require.context()`
- They are sorted numerically by filename for consistent ordering
- The carousel automatically adjusts to show all available images
- If no images are found, a fallback message is displayed

## Adding New Images (Step by Step)

1. Copy your new image files into this folder
2. The HeroBanner component will automatically detect them
3. Restart the development server if images don't appear immediately
4. The carousel will include all images in the slideshow

## Image Optimization Tips

- **Recommended size**: 1920x1080 or similar 16:9 aspect ratio
- **File size**: Keep under 1MB for better loading performance
- **Format**: JPG for photos, PNG for graphics with transparency
- **Quality**: Use 80-90% quality for good balance of size and appearance

## Troubleshooting

If images don't appear:

1. Check that the file format is supported
2. Ensure there are no special characters in filenames
3. Restart the development server
4. Check the browser console for any error messages
5. Verify the images are actually in this folder

The system will automatically handle:
- ✅ Loading all images from this folder
- ✅ Sorting them in a logical order
- ✅ Creating the carousel with proper navigation
- ✅ Showing loading states and error handling
- ✅ Responsive display on all devices
