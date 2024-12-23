import React from 'react';

import BellNotification from '@/pages/NotificationsPage/components/NotificationsBlock/components/BellNotification/index.tsx';
import LuggageNotification from '@/pages/NotificationsPage/components/NotificationsBlock/components/LuggageNotification/index';
import MapPinNotification from '@/pages/NotificationsPage/components/NotificationsBlock/components/MapPinNotification/index';
import RouteNotification from '@/pages/NotificationsPage/components/NotificationsBlock/components/RouteNotification/index';
import {
  NotificationTypes,
  TransformedNotification,
} from '@/pages/NotificationsPage/components/NotificationsBlock/useGetNotifications';
import { createIdString } from '@/utils/createIdString';

interface ListOfNotesProps {
  notifications: TransformedNotification[];
}

const ListOfNotes: React.FC<ListOfNotesProps> = ({ notifications }) => {
  return (
    <>
      {notifications.map((notification) => {
        switch (notification.type) {
          case NotificationTypes.MAP_PIN:
            return (
              <MapPinNotification
                key={notification.id}
                routeId={`${createIdString(`${notification.linkHref}`)}`}
                timeDifference={notification.timeDifference}
              />
            );

          case NotificationTypes.LUGGAGE:
            return (
              <LuggageNotification
                key={notification.id}
                routeId={`${createIdString(`${notification.linkHref}`)}`}
                timeDifference={notification.timeDifference}
                shouldBeStarted={notification.linkText}
              />
            );

          case NotificationTypes.BELL:
            return (
              <BellNotification
                key={notification.id}
                timeDifference={notification.timeDifference}
              />
            );

          case NotificationTypes.ROUTE:
            return (
              <RouteNotification
                key={notification.id}
                routeId={`${createIdString(`${notification.linkHref}`)}`}
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
