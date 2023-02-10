-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2023 at 07:32 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `warehousedata`
--

-- --------------------------------------------------------

--
-- Table structure for table `dispatch_list`
--

CREATE TABLE `dispatch_list` (
  `id` int(100) NOT NULL,
  `date` text NOT NULL,
  `product_name` text NOT NULL,
  `quantity` int(10) NOT NULL,
  `quantity_format` varchar(3) NOT NULL,
  `handed_by` text NOT NULL,
  `location` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dispatch_list`
--

INSERT INTO `dispatch_list` (`id`, `date`, `product_name`, `quantity`, `quantity_format`, `handed_by`, `location`) VALUES
(1, '0000-00-00', 'toothpaste', 30, '/-', 'alex', 'home'),
(2, '2023-08-02', 'toothpaste', 30, '/-', 'alex', 'home'),
(3, '2023/08/02', 'toothpaste', 20, '/-', 'knight', 'office'),
(4, '2023/08/02', 'toothpaste', 20, '/-', 'knight', 'office'),
(5, '2023/08/02', 'toothpaste', 20, '/-', 'knight', 'office'),
(6, '2023/08/02', 'toothpaste', 20, '/-', 'knight', 'office'),
(7, '2023/08/02', 'toothpaste', 20, '/-', 'knight', 'office'),
(8, '2023/08/02', 'toothpaste', 20, '/-', 'knight', 'office'),
(9, '2023/08/02', 'toothpaste', 20, '/-', 'knight', 'office'),
(10, '2023/08/02', 'toothpaste', 20, '/-', 'knight', 'office'),
(11, '2023/08/02', 'toothpaste', 20, '/-', 'knight', 'office'),
(12, '2023/08/02', 'toothpaste', 20, '/-', 'knight', 'office'),
(13, '2023/08/02', 'toothpaste', 20, '/-', 'knight', 'office'),
(14, '2023/08/02', 'toothpaste', 20, '/-', 'knight', 'office'),
(15, '2023/08/02', 'toothpaste', 20, '/-', 'knight', 'office');

-- --------------------------------------------------------

--
-- Table structure for table `productlist`
--

CREATE TABLE `productlist` (
  `id` int(100) NOT NULL,
  `date` text NOT NULL,
  `product_name` text NOT NULL,
  `quantity` float NOT NULL,
  `quantity_format` varchar(3) NOT NULL,
  `supplier` text NOT NULL,
  `remark` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productlist`
--

INSERT INTO `productlist` (`id`, `date`, `product_name`, `quantity`, `quantity_format`, `supplier`, `remark`) VALUES
(1, '0000-00-00', 'Toothpase', 50, '/-', 'somesh', 'dispatch 3'),
(2, '0000-00-00', 'cycle', 50, '/-', 'alex', 'herqules cycle deliverd'),
(3, '10/02/2023', 'cycle', 50, '/-', 'alex', 'herqules cycle deliverd');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `user_name` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `password`) VALUES
(1, 'legend', '$2b$10$CjZr7gL9BemXeHgMnOxtWeRYVcH7EMpYCPyavYXb3vwxYM/Jvlnrq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dispatch_list`
--
ALTER TABLE `dispatch_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productlist`
--
ALTER TABLE `productlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dispatch_list`
--
ALTER TABLE `dispatch_list`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `productlist`
--
ALTER TABLE `productlist`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
