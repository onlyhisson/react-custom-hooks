/**
 * https://developer.mozilla.org/ko/docs/Web/API/notification
 */
export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission === "granted") {
      new Notification(title, options);
    } else if (Notification.permission !== "denied") {
      // default
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Notification", {
            body: "이제 알림을 받을 수 있습니다.",
          });
        } else {
          return;
        }
      });
    } else {
      // denied
      console.log("알림을 받을 수 없습니다.");
      return;
    }
  };

  return fireNotif;
};
