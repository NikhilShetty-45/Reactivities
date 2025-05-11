# Social Network App with .NET 9.0, React 19, and React Query

![Tech Stack](https://img.shields.io/badge/.NET-9.0-512BD4?logo=dotnet)
![Tech Stack](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tech Stack](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript)
![Tech Stack](https://img.shields.io/badge/React_Query-5.0.0-FF4154?logo=reactquery)

A modern social network application built with .NET 9.0, React 19, and React Query, following Clean Architecture principles and implementing CQRS + Mediator patterns.

## Features

- **User Authentication**: Register, login, and manage user profiles
- **Event Management**: Create and join events (similar to MeetUp)
- **Real-time Chat**: SignalR-powered communication
- **Photo Uploads**: Custom upload widget with image cropping
- **Advanced UI**: Built with Semantic UI and React Hook Form
- **Paging & Filtering**: Sophisticated data display options
- **Clean Architecture**: Multi-project .NET solution
- **CQRS + Mediator**: Separation of concerns for maintainability

## Tech Stack

### Backend (.NET 9.0)
- ASP.NET Core WebAPI
- Entity Framework Core
- MediatR (CQRS + Mediator pattern)
- AutoMapper
- ASP.NET Core Identity
- SignalR
- xUnit for testing

### Frontend (React 19)
- React with TypeScript
- React Query for data fetching
- MobX for state management
- React Router
- React Hook Form with Zod validation
- Semantic UI
- Custom photo upload widget (Dropzone + Cropper)


### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/NikhilShetty-45/Reactivities.git
   cd Reactivities
