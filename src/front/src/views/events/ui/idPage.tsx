import React from "react";

export interface EventsIdPageProps {}

const EventsIdPage: React.FC<EventsIdPageProps> = ({}) => {
  return (
    <div className="container mx-auto flex max-xl:flex-col gap-10 my-12 px-5"></div>
  );
};

export default React.memo(EventsIdPage);
