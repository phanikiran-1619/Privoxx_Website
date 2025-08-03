# Leadership Profile Images Setup

## How to Add Your Leadership Team Images

### 1. Save Your Images
Place your leadership team images in the `public/` folder with these names:
- `ceo-profile.jpg` - For the CEO profile
- `coo-profile.jpg` - For the COO profile (the image you showed)

### 2. Image Requirements
- **Format**: JPG or PNG
- **Size**: 300x300 pixels minimum (square format works best)
- **Quality**: High resolution for professional appearance
- **Style**: Professional headshot with neutral background

### 3. Current Leadership Team

#### CEO - Rajesh Kumar
- **Title**: Chief Executive Officer
- **Experience**: 15+ years in innovative product development and leadership
- **Vision**: Revolutionizing privacy solutions to make them accessible to every Indian household

#### COO - Sai Lokesh Manchineella
- **Title**: Chief Operating Officer  
- **Experience**: 10+ years in operations and strategic leadership
- **Vision**: Building scalable operations that deliver exceptional privacy solutions across India

### 4. File Structure
```
public/
├── ceo-profile.jpg     # CEO profile image
├── coo-profile.jpg     # COO profile image (your image)
└── visual logo.png     # Existing logo
```

### 5. Alternative Image Paths
If you prefer different file names, update these lines in `src/components/CompanyLeadership.tsx`:

```typescript
// Line 8 - CEO avatar
avatar: "/your-ceo-image.jpg",

// Line 20 - COO avatar  
avatar: "/your-coo-image.jpg",
```

### 6. Testing
After adding the images:
1. Restart your development server
2. Navigate to the "Meet Our Leadership Team" section
3. Verify the images display correctly

The images will automatically be optimized and served by Vite's development server. 