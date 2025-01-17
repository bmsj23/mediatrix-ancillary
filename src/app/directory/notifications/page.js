"use client";

import React, { useState } from "react";
import { DirectorySidebar } from "@/components/directory-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

const NotificationItem = ({
  title,
  message,
  timestamp,
  type,
  isRead,
  onClick,
  source,
}) => {
  return (
    <div
      className={`border p-6 rounded-lg mb-4 w-full ${
        isRead ? "bg-gray-50" : "bg-white"
      } hover:shadow-md transition-shadow cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 w-full">
          <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
          <p className="text-gray-600 mt-2 text-base">{message}</p>
          <div className="flex items-center mt-3">
            <span
              className={`px-3 py-1.5 rounded-full text-sm ${getTypeStyles(
                type
              )}`}
            >
              {type}
            </span>
            <span className="text-gray-400 text-sm ml-3">{timestamp}</span>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            <strong>Source:</strong> {source}
          </div>
        </div>
        {!isRead && (
          <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
        )}
      </div>
    </div>
  );
};

const NotificationModal = ({ notification, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-semibold text-blue-800">
            {notification.title}
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <span
          className={`px-3 py-1.5 rounded-full text-sm inline-block mb-4 ${getTypeStyles(
            notification.type
          )}`}
        >
          {notification.type}
        </span>
        <p className="text-gray-600 text-lg mb-4">{notification.message}</p>
        <div className="text-gray-400 text-sm mb-4">
          {notification.timestamp}
        </div>
        <div className="text-sm text-gray-500">
          <strong>Source:</strong> {notification.source}
        </div>
      </div>
    </div>
  );
};

const getTypeStyles = (type) => {
  switch (type.toLowerCase()) {
    case "announcement":
      return "bg-blue-100 text-blue-800";
    case "news":
      return "bg-green-100 text-green-800";
    case "memo":
      return "bg-purple-100 text-purple-800";
    case "message":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Policy Update",
      message:
        "A new policy regarding remote work has been implemented. This update includes changes to our current work-from-home arrangements and introduces new guidelines for hybrid work schedules. Please review the complete policy document for detailed information about the new procedures and requirements.",
      type: "Announcement",
      timestamp: "5 minutes ago",
      isRead: false,
      source: "HR Department",
    },
    {
      id: 2,
      title: "Global Expansion News",
      message:
        "Our company is expanding to new international markets. This expansion represents a significant milestone in our growth strategy and will create new opportunities for cross-border collaboration and career development.",
      type: "News",
      timestamp: "1 hour ago",
      isRead: false,
      source: "Ancillary Director",
    },
    {
      id: 3,
      title: "New Memo: Q4 Reports",
      message:
        "Quarterly reports are now available for review. Please access the reports through the secure portal and submit your departmental reviews by the end of next week.",
      type: "Memo",
      timestamp: "2 hours ago",
      isRead: true,
      source: "Finance Department",
    },
    {
      id: 4,
      title: "New Message from Ancillary Director",
      message:
        "Regarding the patient transfer protocol: We need to discuss the updated procedures for emergency transfers. Please review the attached guidelines and let me know your availability for a brief meeting.",
      type: "Message",
      timestamp: "3 hours ago",
      isRead: false,
      source: "Ancillary Director",
    },
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setNotifications(
      notifications.map((notif) =>
        notif.id === notification.id ? { ...notif, isRead: true } : notif
      )
    );
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DirectorySidebar />
        <main className="flex-grow w-full">
          {/* Sticky Header with Breadcrumb */}
          <header className="sticky top-0 z-10 w-full h-16 bg-white shadow-sm">
            <div className="h-full px-4 flex items-center overflow-x-auto">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Breadcrumb className="w-full">
                <BreadcrumbList className="flex-nowrap whitespace-nowrap">
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      ACUP Management
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Notifications</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          {/* Main Content */}
          <div className="w-full p-4 md:p-6">
            <div className="w-full">
              <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
                Notifications
              </h1>
              <div className="space-y-4 w-full">
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    {...notification}
                    onClick={() => handleNotificationClick(notification)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Notification Modal */}
          {selectedNotification && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
              onClick={() => setSelectedNotification(null)}
            >
              <div
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="text-blue-600 mb-4" 
                  onClick={() => setSelectedNotification(null)}
                >
                  Back
                </button>
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-800 break-words">
                  {selectedNotification.title}
                </h2>
                <div className="text-sm text-gray-500 mb-2">
                  {selectedNotification.timestamp} • {selectedNotification.source}
                </div>
                <div className="text-black whitespace-pre-line break-words">
                  {selectedNotification.message}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </SidebarProvider>
  );
}