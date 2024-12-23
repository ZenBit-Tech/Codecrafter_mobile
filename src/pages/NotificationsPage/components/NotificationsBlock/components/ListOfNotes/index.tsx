import React from 'react';

import BellNotification from '@/pages/NotificationsPage/components/NotificationsBlock/components/BellNotification/index.tsx';
import LuggageNotification from '@/pages/NotificationsPage/components/NotificationsBlock/components/LuggageNotification/index';
import MapPinNotification from '@/pages/NotificationsPage/components/NotificationsBlock/components/MapPinNotification/index';
import RouteNotification from '@/pages/NotificationsPage/components/NotificationsBlock/components/RouteNotification/index';
import { TransformedNotification } from '@/pages/NotificationsPage/components/NotificationsBlock/useGetNotifications';
import { createIdString } from '@/utils/createIdString';

interface ListOfNotesProps {
  notifications: TransformedNotification[];
}

const ListOfNotes: React.FC<ListOfNotesProps> = ({ notifications }) => {
  return (
    <>
      {notifications.map((notification) => {
        switch (notification.type) {
          case 'map-pin':
            return (
              <MapPinNotification
                key={notification.id}
                routeId={`${createIdString(`${notification.id}`)}`}
                timeDifference={notification.timeDifference}
              />
            );

          case 'luggage':
            return (
              <LuggageNotification
                key={notification.id}
                routeId={`${createIdString(`${notification.id}`)}`}
                timeDifference={notification.timeDifference}
                shouldBeStarted={notification.linkText}
              />
            );

          case 'bell':
            return (
              <BellNotification
                key={notification.id}
                timeDifference={notification.timeDifference}
              />
            );

          case 'route':
            return (
              <RouteNotification
                key={notification.id}
                routeId={`${createIdString(`${notification.id}`)}`}
                timeDifference={notification.timeDifference}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default ListOfNotes;
