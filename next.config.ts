import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The homepage points at the current default variant. Kept temporary
      // (307/308-free) so the default can move without browsers caching it.
      {
        source: "/",
        destination: "/v1/mini",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
