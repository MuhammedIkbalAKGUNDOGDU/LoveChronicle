import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Poem() {
  return (
    <section id="poem" className="py-16">
      <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-pink-50 to-red-50">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Love's Symphony</h2>
        
        <motion.div 
          className="space-y-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 italic">
            In moments shared and dreams entwined,<br/>
            A love so pure and rare to find.<br/>
            Your smile lights up my darkest days,<br/>
            Your love guides me in countless ways.
          </p>
          
          <p className="text-lg text-gray-700 italic">
            Through seasons changing, years unfold,<br/>
            Our story written, brave and bold.<br/>
            Each day with you brings joy anew,<br/>
            A heart that beats forever true.
          </p>
          
          <p className="text-lg text-gray-700 italic">
            Forever yours, in love's sweet dance,<br/>
            Caught in this magical romance.<br/>
            Together strong, two hearts as one,<br/>
            Until life's journey here is done.
          </p>
        </motion.div>
      </Card>
    </section>
  );
}
