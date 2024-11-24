"use client";

import { Calendar, Clock, MapPin, Users } from "lucide-react";

import {
  Expandable,
  ExpandableCard,
  ExpandableCardContent,
  ExpandableCardFooter,
  ExpandableCardHeader,
  ExpandableContent,
  ExpandableTrigger,
} from "../../components/ui/Expand";

const tempData = [
  {
    due: "In 15 mins",
    title: "Meeting 1",
    time: "1:30PM → 2:30PM",
    place: "Conference Room A",
    description:
      "Weekly design sync to discuss ongoing projects, share updates, and address any design-related challenges.",
  },
  {
    due: "In 30 mins",
    title: "Patient Check-In",
    time: "2:00PM → 3:00PM",
    place: "Front Desk",
    description:
      "Check-in process for patients arriving for scheduled appointments, including verifying personal details and insurance information.",
  },
  {
    due: "In 2 days",
    title: "Medical Equipment Inspection",
    time: "3:00PM → 4:00PM",
    place: "Equipment Storage Room",
    description:
      "Routine inspection and maintenance of medical equipment to ensure functionality and safety standards are met.",
  },
  {
    due: "In 1 hour",
    title: "Ancillary Services Meeting",
    time: "4:00PM → 5:00PM",
    place: "Ancillary Office",
    description:
      "Monthly meeting to review and discuss the performance of ancillary services, address challenges, and plan improvements.",
  },
];

function DesignSyncExample() {
  return (
    <Expandable
      expandDirection="both"
      expandBehavior="replace"
      initialDelay={0.2}
    >
      {({ isExpanded }) => (
        <ExpandableTrigger>
          <ExpandableCard
            className="w-full relative"
            collapsedSize={{ width: 410, height: 240 }}
            expandedSize={{ width: 430, height: 480 }}
            hoverToExpand={false}
            expandDelay={200}
            collapseDelay={500}
          >
            <ExpandableCardHeader>
              <div className="flex justify-between items-start w-full">
                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-100 mb-2 text-sm">
                    In 15 mins
                  </span>
                  <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
                    Design Sync
                  </h3>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Calendar className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </ExpandableCardHeader>

            <ExpandableCardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>1:30PM → 2:30PM</span>
                </div>

                <ExpandableContent preset="blur-md">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Conference Room A</span>
                  </div>
                </ExpandableContent>
              </div>

              <ExpandableContent preset="blur-md" stagger staggerChildren={0.2}>
                <div className="mt-4 space-y-4">
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    Weekly design sync to discuss ongoing projects, share
                    updates, and address any design-related challenges.
                  </p>

                  <div>
                    <h4 className="font-medium text-sm text-gray-800 dark:text-gray-100 mb-2 flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Attendees:
                    </h4>
                    <div className="flex -space-x-2">
                      {["Alice", "Bob", "Charlie", "David"].map(
                        (name, index) => (
                          <div
                            key={name}
                            className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-200 ring-2 ring-white dark:ring-gray-900"
                          >
                            {name[0]}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </ExpandableContent>
            </ExpandableCardContent>

            <ExpandableCardFooter>
              <div className="flex items-center justify-between w-full text-sm text-gray-600 dark:text-gray-300">
                <span>Weekly</span>
                <span>Next: Mon, 10:00 AM</span>
              </div>
            </ExpandableCardFooter>
          </ExpandableCard>
        </ExpandableTrigger>
      )}
    </Expandable>
  );
}

export default function EventCard() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <div className="min-h-[160px]">
          <DesignSyncExample />
        </div>
        <div className="flex gap-1 min-h-[30px]"></div>
      </div>
    </div>
  );
}
