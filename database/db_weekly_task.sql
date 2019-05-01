-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2019 at 10:20 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_weekly_task`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbldailytask`
--

CREATE TABLE `tbldailytask` (
  `DailyTaskId` int(11) NOT NULL,
  `EmployeeId` int(11) NOT NULL,
  `ProjectId` int(11) NOT NULL,
  `TaskDate` date NOT NULL,
  `TaskDescription` text NOT NULL,
  `IsActive` bit(1) NOT NULL DEFAULT b'1',
  `CreatedBy` int(10) NOT NULL,
  `CreatedDate` date NOT NULL,
  `UpdatedBy` int(10) NOT NULL,
  `UpdatedOn` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tblemployees`
--

CREATE TABLE `tblemployees` (
  `EmployeeId` int(10) NOT NULL,
  `EmployeeName` varchar(100) NOT NULL,
  `JoiningDate` date NOT NULL,
  `BirthDate` date NOT NULL,
  `Address` text NOT NULL,
  `PhoneNo` varchar(13) NOT NULL,
  `Designation` varchar(100) NOT NULL,
  `EmailId` varchar(100) NOT NULL,
  `IsActive` tinyint(1) NOT NULL DEFAULT '1',
  `CreatedBy` int(10) NOT NULL,
  `CreatedDate` datetime NOT NULL,
  `UpdatedBy` int(10) NOT NULL,
  `UpdatedOn` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tblemployees`
--

INSERT INTO `tblemployees` (`EmployeeId`, `EmployeeName`, `JoiningDate`, `BirthDate`, `Address`, `PhoneNo`, `Designation`, `EmailId`, `IsActive`, `CreatedBy`, `CreatedDate`, `UpdatedBy`, `UpdatedOn`) VALUES
(1, 'Nikita P.', '2019-04-04', '2019-04-04', 'ffff', '9428293789', 'php', 'n@g.comm', 1, 1, '2019-04-01 00:00:00', 1, '2019-04-01 00:00:00'),
(2, 'Nikita Parmar', '2019-04-01', '1989-10-06', 'kutch', '7634567890', 'php', 'n@gh.com', 0, 1, '2019-04-15 00:00:00', 1, '2019-04-15 00:00:00'),
(3, 'Nikikkkk', '2019-04-03', '2019-04-03', 'ff', 'vgfghh', 'php', 'n@gf.com', 1, 1, '2019-04-10 00:00:00', 1, '2019-04-09 00:00:00'),
(48, 'Nikita', '2019-05-10', '2019-05-09', 'ffdfd', '9428293789', 'php', 'n@gd.comm', 0, 0, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tblprojects`
--

CREATE TABLE `tblprojects` (
  `ProjectId` int(11) NOT NULL,
  `ProjectName` varchar(150) NOT NULL,
  `Description` text NOT NULL,
  `IsActive` bit(1) NOT NULL DEFAULT b'1',
  `CreatedBy` int(10) NOT NULL,
  `CreatedDate` date NOT NULL,
  `UpdatedBy` int(10) NOT NULL,
  `UpdatedOn` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbldailytask`
--
ALTER TABLE `tbldailytask`
  ADD PRIMARY KEY (`DailyTaskId`),
  ADD KEY `EmployeeId` (`EmployeeId`),
  ADD KEY `ProjectId` (`ProjectId`);

--
-- Indexes for table `tblemployees`
--
ALTER TABLE `tblemployees`
  ADD PRIMARY KEY (`EmployeeId`);

--
-- Indexes for table `tblprojects`
--
ALTER TABLE `tblprojects`
  ADD PRIMARY KEY (`ProjectId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbldailytask`
--
ALTER TABLE `tbldailytask`
  MODIFY `DailyTaskId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `tblemployees`
--
ALTER TABLE `tblemployees`
  MODIFY `EmployeeId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT for table `tblprojects`
--
ALTER TABLE `tblprojects`
  MODIFY `ProjectId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbldailytask`
--
ALTER TABLE `tbldailytask`
  ADD CONSTRAINT `tbldailytask_ibfk_1` FOREIGN KEY (`EmployeeId`) REFERENCES `tblemployees` (`EmployeeId`),
  ADD CONSTRAINT `tbldailytask_ibfk_2` FOREIGN KEY (`ProjectId`) REFERENCES `tblprojects` (`ProjectId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
