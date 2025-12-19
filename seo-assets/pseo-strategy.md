# Hemp Headz pSEO: Programmatic Local Landing Pages

## Objective
Capture "near me" and neighborhood-specific search volume for core product categories.

## Dataset
- **Neighborhoods**: The Heights, Garden Oaks, Oak Forest, Independence Heights, Acres Homes, Northside, Spring Branch.
- **Products**: Delta 8 Gummies, THCA Flower, Delta 9 Edibles, CBD Oil.

## Implementation Path
1. **Directory Structure**: `/locations/[neighborhood]/[product]`
2. **Template Logic**:
   - Dynamic Meta Title: "Best {Product} in {Neighborhood} | Hemp Headz Houston"
   - Dynamic H1: "{Product} near {Neighborhood}"
   - Dynamic Content: "Located on North Shepherd Dr, Hemp Headz is the premier {Product} dispensary serving {Neighborhood}..."
   - Dynamic Map: Centered on store with {Neighborhood} as start point.

## Automation Script
Created `file '/home/.z/workspaces/con_69qUSiMhtGnK5P3N/generate_pseo.js'` to handle static generation of these routes.

