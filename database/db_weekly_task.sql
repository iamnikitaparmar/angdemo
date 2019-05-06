-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 06, 2019 at 02:23 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
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

DROP TABLE IF EXISTS `tbldailytask`;
CREATE TABLE IF NOT EXISTS `tbldailytask` (
  `DailyTaskId` int(11) NOT NULL AUTO_INCREMENT,
  `EmployeeId` int(11) NOT NULL,
  `ProjectId` int(11) NOT NULL,
  `TaskDate` date NOT NULL,
  `TaskDescription` text NOT NULL,
  `IsActive` tinyint(4) NOT NULL DEFAULT '1',
  `CreatedBy` int(10) NOT NULL,
  `CreatedDate` datetime NOT NULL,
  `UpdatedBy` int(10) NOT NULL,
  `UpdatedDate` datetime NOT NULL,
  PRIMARY KEY (`DailyTaskId`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbldailytask`
--

INSERT INTO `tbldailytask` (`DailyTaskId`, `EmployeeId`, `ProjectId`, `TaskDate`, `TaskDescription`, `IsActive`, `CreatedBy`, `CreatedDate`, `UpdatedBy`, `UpdatedDate`) VALUES
(1, 1, 1, '2019-05-01', 'fgfhgf', 1, 0, '2019-05-14 00:00:00', 0, '2019-05-16 00:00:00'),
(2, 3, 8, '2019-05-22', 'dddd', 0, 0, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00'),
(4, 1, 1, '2019-05-07', 'ffffffff', 1, 0, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tblemployees`
--

DROP TABLE IF EXISTS `tblemployees`;
CREATE TABLE IF NOT EXISTS `tblemployees` (
  `EmployeeId` int(10) NOT NULL AUTO_INCREMENT,
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
  `UpdatedOn` datetime NOT NULL,
  PRIMARY KEY (`EmployeeId`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tblemployees`
--

INSERT INTO `tblemployees` (`EmployeeId`, `EmployeeName`, `JoiningDate`, `BirthDate`, `Address`, `PhoneNo`, `Designation`, `EmailId`, `IsActive`, `CreatedBy`, `CreatedDate`, `UpdatedBy`, `UpdatedOn`) VALUES
(1, 'Nikita P.', '2019-04-04', '2019-04-04', 'ffff', '9428293789', 'php', 'n@g.comm', 1, 1, '2019-04-01 00:00:00', 1, '2019-04-01 00:00:00'),
(2, 'Nikita Parmar', '2019-04-01', '1989-10-06', 'kutch', '7634567890', 'php', 'n@gh.com', 0, 1, '2019-04-15 00:00:00', 1, '2019-04-15 00:00:00'),
(3, 'Nikikkkk', '2019-04-03', '2019-04-03', 'ff', 'vgfghh', 'php', 'n@gf.com', 1, 1, '2019-04-10 00:00:00', 1, '2019-04-09 00:00:00'),
(49, 'Nikita Parmar', '2019-05-08', '2019-05-08', 'hjk', '7634567890', 'php', 'nkl@gmail.com', 1, 0, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tblprojects`
--

DROP TABLE IF EXISTS `tblprojects`;
CREATE TABLE IF NOT EXISTS `tblprojects` (
  `ProjectId` int(11) NOT NULL AUTO_INCREMENT,
  `ProjectName` varchar(150) NOT NULL,
  `Description` text NOT NULL,
  `IsActive` tinyint(4) NOT NULL DEFAULT '1',
  `CreatedBy` int(11) NOT NULL,
  `CreatedDate` datetime NOT NULL,
  `UpdatedBy` int(11) NOT NULL,
  `UpdatedDate` datetime NOT NULL,
  PRIMARY KEY (`ProjectId`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tblprojects`
--

INSERT INTO `tblprojects` (`ProjectId`, `ProjectName`, `Description`, `IsActive`, `CreatedBy`, `CreatedDate`, `UpdatedBy`, `UpdatedDate`) VALUES
(1, 'projecttttt', 'ffgggggg', 0, 0, '2019-05-02 00:00:00', 0, '2019-05-02 00:00:00'),
(2, 'project', 'ffgg', 1, 0, '2019-05-02 00:00:00', 0, '2019-05-02 00:00:00'),
(6, 'hghjghj', 'vvhjvhj', 1, 0, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00'),
(7, 'fhgfhgfhg', 'fyugfyug', 0, 0, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00'),
(8, 'prjdgfdg', 'fgfhgf', 1, 0, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
