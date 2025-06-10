# WorkshopRPLDIUP - QuickCart E-commerce Platform

## Team Members
- Daniel Winston Mandela Tulung 23/516260/PA/22080
- Mohammad Azka Khairur Rahman 23/511608/PA/21830
- Satwika Nino Wandhana 23/516202/PA/22066
- Adam Maulana Haq 23/511623/PA/21832
- Rindra Adriansyah 23/511559/PA//21820

## Project Overview
QuickCart is a comprehensive e-commerce web application built with Node.js. This project demonstrates modern software development practices including automated testing, containerization, and proper documentation.

## Features
- Shopping cart functionality
- User authentication and management
- Product catalog
- Transaction processing
- Dockerized deployment
- Comprehensive testing suite

## Architecture
The application follows a well-structured architecture with proper separation of concerns:
- **Backend**: Node.js application
- **Database**: Integrated data management
- **Testing**: Jest testing framework
- **Containerization**: Docker support
- **CI/CD**: GitHub Actions workflow

## Documentation
Comprehensive documentation is available in the [docs/](docs/) directory:
- [C4 UML Diagram](docs/C4%20UML%20Diagram%20of%20an%20E-commerce%20Website.pdf)
- [Class Diagram](docs/QuickCart%20Class%20Diagram.jpg)
- [Use Case Diagram](docs/usecasediagramecommerce.drawio.png)
- [Transaction State Machine](docs/Transaction%20State%20Machine%20Diagram.jpg)
- [Deployment Diagram](docs/Qcart%20-%20deployemeny%20diagram.png)
- [Testing Documentation](docs/Automated%20Testing%20NodeJS.pdf)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Docker and Docker Compose
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd WorkshopRPLDIUP
```

2. Navigate to the QuickCart directory:
```bash
cd QuickCart
```

3. Install dependencies:
```bash
npm install
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Running the Application

#### Local Development
```bash
npm start
```

#### Using Docker
```bash
docker-compose up
```

The application will be available at `http://localhost:3000` (or the port specified in your configuration).

## Testing
The project includes comprehensive automated testing using Jest:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Development Tools
- **ESLint**: Code linting and formatting
- **Jest**: Testing framework
- **Docker**: Containerization
- **GitHub Actions**: CI/CD pipeline

## Project Structure
```
QuickCart/
├── cart.js              # Main cart functionality
├── docker-compose.yml   # Docker compose configuration
├── dockerfile           # Docker container setup
├── jest.config.js       # Jest testing configuration
├── eslint.config.mjs    # ESLint configuration
├── .env                 # Environment variables
└── ...
```

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure everything works
5. Submit a pull request

## License
This project is part of an academic assignment for Workshop RPL DIUP.

## Assignment Reference
This project fulfills the requirements outlined in [Software Testing Assignment.pdf](Software%20Testing%20Assignment.pdf).
