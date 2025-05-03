/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: {
    domains: ["sharp-wilbur.202-230-232-174.plesk.page"], // Allow this domain
    unoptimized: true,
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: [
            {
              loader: "@svgr/webpack",
              options: {
                svgo: true,
                svgoConfig: {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false, // Ensure the viewBox attribute is preserved
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
          as: "*.js",
        },
      },
    },
  },
  // eslint-disable-next-line
  webpack(config: any) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false, // Ensure the viewBox attribute is preserved
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
