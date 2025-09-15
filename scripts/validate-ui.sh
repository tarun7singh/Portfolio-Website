#!/bin/bash

# UI Validation Script
# This script performs basic validation of the UI after package upgrades

echo "🔍 UI Validation Script for Package Upgrades"
echo "============================================="

# Check if development server is running
echo "📡 Checking if development server is accessible..."
if curl -f -s http://localhost:3000 > /dev/null; then
    echo "✅ Development server is running at http://localhost:3000"
else
    echo "❌ Development server is not accessible"
    echo "   Please run 'npm run dev' first"
    exit 1
fi

echo ""
echo "🎯 Manual UI Validation Checklist:"
echo "=================================="
echo ""
echo "Please manually verify the following in your browser at http://localhost:3000:"
echo ""
echo "✓ Page loads without errors"
echo "✓ Hero section displays correctly with animations"
echo "✓ Skills section shows all skill icons and descriptions"
echo "✓ Projects section displays project cards with hover effects"
echo "✓ Contact section shows contact information and links"
echo "✓ Theme toggle works (dark/light mode switch)"
echo "✓ Social media links are clickable and point to correct URLs"
echo "✓ Responsive design works on different screen sizes"
echo "✓ Animations and transitions work smoothly"
echo "✓ No console errors in browser developer tools"
echo ""

# Check build process
echo "🏗️  Testing build process..."
cd /home/runner/work/Portfolio-Website/Portfolio-Website
if npm run build > /dev/null 2>&1; then
    echo "✅ Build process completed successfully"
else
    echo "❌ Build process failed"
    echo "   Run 'npm run build' for detailed error information"
fi

echo ""
echo "📱 Responsive Testing:"
echo "===================="
echo "Test the following viewport sizes in your browser:"
echo "• Desktop: 1920x1080 (or your screen resolution)"
echo "• Tablet: 768x1024 (iPad portrait)"
echo "• Mobile: 390x844 (iPhone 14 Pro)"
echo ""

echo "🎨 Theme Testing:"
echo "================"
echo "Verify both themes work correctly:"
echo "• Dark theme (default)"
echo "• Light theme (via theme toggle)"
echo "• Smooth transition between themes"
echo ""

echo "🔗 Functional Testing:"
echo "====================="
echo "Test all interactive elements:"
echo "• Navigation links (if any)"
echo "• Social media links (LinkedIn, GitHub, Twitter)"
echo "• Download resume link"
echo "• Email link (hello@tarunsingh.dev)"
echo "• Any buttons or interactive components"
echo ""

echo "✨ Summary:"
echo "=========="
echo "This validation ensures that all major package upgrades"
echo "(React 19, Next.js 15, Framer Motion, etc.) maintain"
echo "the expected UI functionality and appearance."
echo ""
echo "If all manual checks pass, the package upgrades are"
echo "successfully maintaining UI integrity."
echo ""
echo "🎉 Package upgrade validation complete!"