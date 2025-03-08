import { Card } from "@/components/ui/card";

const timelineEvents = [
  {
    date: "February 14, 2022",
    title: "First Date",
    description: "A magical evening at the local café where our eyes first met."
  },
  {
    date: "April 1, 2022",
    title: "First Kiss",
    description: "Under the cherry blossoms, our hearts connected."
  },
  {
    date: "July 15, 2022",
    title: "Vacation Together",
    description: "A weekend getaway that turned into unforgettable memories."
  },
  {
    date: "December 25, 2022",
    title: "Meeting the Family",
    description: "Sharing love and laughter during the holiday season."
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Journey Together</h2>
      
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-200"/>
        
        {timelineEvents.map((event, index) => (
          <div key={event.date} className={`mb-8 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}>
            <Card className={`w-96 relative ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
              <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-pink-400 rounded-full
                            ${index % 2 === 0 ? '-right-10' : '-left-10'}"/>
              <div className="p-6">
                <p className="text-sm text-pink-600 mb-2">{event.date}</p>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
