import os

# Define the directory containing HTML files and the output sitemap file
html_directory = '.'  # Change this if necessary
sitemap_file = 'sitemap.txt'

# Open the sitemap file for writing
with open(sitemap_file, 'w') as sitemap:
    # Iterate over all files in the directory
    for filename in os.listdir(html_directory):
        # Check if the file is an HTML file
        if filename.endswith('.html'):
            # Form the full URL
            full_url = f'https://umana-salud-mental.github.io/{filename}'
            # Write the URL to the sitemap file
            sitemap.write(full_url + '\n')

print(f'Sitemap generated: {sitemap_file}')