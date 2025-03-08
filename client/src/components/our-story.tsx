import { Card } from "@/components/ui/card";

export function OurStory() {
  return (
    <section id="story" className="py-16">
      <Card className="max-w-3xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Story</h2>
        
        <div className="prose prose-pink mx-auto">
          <p className="text-gray-600 leading-relaxed">
            It all began on a crisp winter evening when fate brought us together at a local café. 
            The warm glow of fairy lights twinkled above as we shared our first conversation over 
            steaming cups of coffee. Little did we know that this chance encounter would blossom 
            into something extraordinary.
          </p>
          
          <p className="text-gray-600 leading-relaxed mt-4">
            Through shared laughter, quiet moments, and countless adventures, our love has grown 
            deeper with each passing day. From spontaneous road trips to cozy movie nights, every 
            moment together has been a treasure, weaving the beautiful tapestry of our relationship.
          </p>
          
          <p className="text-gray-600 leading-relaxed mt-4">
            Today, we celebrate not just our love, but the journey that brought us here. Every smile, 
            every challenge overcome, and every dream shared has made our bond stronger. As we look 
            to the future, we know that the best chapters of our story are yet to be written.
          </p>
        </div>
      </Card>
    </section>
  );
}
