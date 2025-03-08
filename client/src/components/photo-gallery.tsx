import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1530027618771-db9eb5d2f905",
    caption: "First Dance Together"
  },
  {
    url: "https://images.unsplash.com/photo-1505343489387-c8d7f57b7c41",
    caption: "Sunset Walk"
  },
  {
    url: "https://images.unsplash.com/photo-1576654352155-4dbca58717ef",
    caption: "Coffee Date"
  },
  {
    url: "https://images.unsplash.com/photo-1546418608-3cf6027ffeac",
    caption: "Winter Wonderland"
  },
  {
    url: "https://images.unsplash.com/photo-1593708329478-b20eefbd8165",
    caption: "Beach Day"
  },
  {
    url: "https://images.unsplash.com/photo-1574156886833-5c0fa1633252",
    caption: "Perfect Evening"
  }
];

export function PhotoGallery() {
  return (
    <section id="gallery" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Moments</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white p-4 font-medium">{photo.caption}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
