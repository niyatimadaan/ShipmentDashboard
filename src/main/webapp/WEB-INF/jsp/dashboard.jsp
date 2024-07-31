<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!-- <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> -->

<!--<!DOCTYPE html>-->
<html>
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <!-- <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css"> -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> -->
</head>
<body>
    <div class="dashboard">
        <header>
            <h1>Dashboard</h1>
            <!-- Add additional header content here -->
        </header>
        <nav>
            <ul>
                <!-- <li><a href="${pageContext.request.contextPath}/dashboard">Dashboard</a></li> -->
                <li>new </li>
                <!-- Add other navigation items here -->
            </ul>
        </nav>
        <main>
            <section class="statistics">
                <div class="stat-item">
                    <h2>Total Bookings</h2>
                    <p>501 Bookings</p>
                </div>
                <div class="stat-item">
                    <h2>Booking Attended</h2>
                    <p>501 Bookings</p>
                </div>
                <div class="stat-item">
                    <h2>Booking Cancelled</h2>
                    <p>0 Bookings</p>
                </div>
                <div class="stat-item">
                    <h2>Attendance</h2>
                    <p>100%</p>
                </div>
            </section>
            <section class="map">
                <h2>Map</h2>
                <div id="map"></div>
            </section>
            <section class="charts">
                <h2>Pie Chart Analysis</h2>
                <div>
                    <canvas id="pieChart1"></canvas>
                </div>
                <div>
                    <canvas id="pieChart2"></canvas>
                </div>
                <div>
                    <canvas id="pieChart3"></canvas>
                </div>
                <div>
                    <canvas id="pieChart4"></canvas>
                </div>
            </section>
            <section class="documents">
                <h2>Latest Documents</h2>
                <ul>
                    <li>Packing List - March 22, 2023</li>
                    <li>Cancellation Letter - March 22, 2023</li>
                    <li>Packing List - March 22, 2023</li>
                </ul>
            </section>
            <section class="announcements">
                <h2>Announcements</h2>
                <p>No new announcements.</p>
            </section>
        </main>
    </div>
    <script>
        // JavaScript to initialize charts and map
    </script>
</body>
</html>