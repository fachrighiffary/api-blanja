-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 17 Des 2020 pada 03.24
-- Versi Server: 10.1.16-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blanjaapp`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `blacklist_token`
--

CREATE TABLE `blacklist_token` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `blacklist_token`
--

INSERT INTO `blacklist_token` (`id`, `token`, `created_at`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhY2hyaWdoaWZmYXJ5QGdtYWlsLmNvbSIsImxldmVsIjoxLCJpYXQiOjd9.gVP0KBTxW6a91otghK7KmLJg7tv0LmKDnEtkbTtiqTk', '0000-00-00 00:00:00'),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhY2hyaWdoaWZmYXJ5QGdtYWlsLmNvbSIsImxldmVsIjoxLCJpYXQiOjd9.gVP0KBTxW6a91otghK7KmLJg7tv0LmKDnEtkbTtiqTk', '0000-00-00 00:00:00'),
(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhY2hyaWdoaWZmYXJ5QGdtYWlsLmNvbSIsImxldmVsIjoxLCJpYXQiOjd9.gVP0KBTxW6a91otghK7KmLJg7tv0LmKDnEtkbTtiqTk', '0000-00-00 00:00:00'),
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impva293aUBnbWFpbC5jb20iLCJsZXZlbCI6MSwiaWF0Ijo4fQ.WXGw401VmVf7PR566ASdTZo0JLNv39CCl0kmfopaDQg', '2020-12-16 14:45:31');

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`id`, `category_name`, `status`) VALUES
(1, 'T-shirt', 1),
(2, 'Short', 1),
(3, 'Jacket', 1),
(4, 'Pants', 1),
(5, 'Shoes', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `level` enum('Seller','Customer') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `levels`
--

INSERT INTO `levels` (`id`, `level`) VALUES
(1, 'Seller'),
(2, 'Customer');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_qty` int(11) NOT NULL,
  `product_img` varchar(255) NOT NULL,
  `product_desc` longtext NOT NULL,
  `product_size` varchar(255) NOT NULL,
  `product_color` varchar(255) NOT NULL,
  `product_condition` varchar(255) NOT NULL,
  `input_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `user_id`, `category_id`, `product_name`, `product_price`, `product_qty`, `product_img`, `product_desc`, `product_size`, `product_color`, `product_condition`, `input_date`, `update_date`) VALUES
(1, 7, 5, 'Adidas', 600000, 2, '/images/1608036937990-product_img.jpg,/images/1608036937993-product_img.jpg,/images/1608036938356-product_img.jpg,/images/1608036938358-product_img.jpg,/images/1608036938359-product_img.jpg', 'Bahan adem terbuat dari bahan parasit', '31,32,33,40,41,42', 'Blue, black, white,red', 'New', '2020-12-15 12:55:38', '2020-11-21 03:06:25'),
(2, 7, 1, 'ADIDASS', 699000, 5, '/images/1608037130128-product_img.jpg,/images/1608037130129-product_img.jpg,/images/1608037130130-product_img.jpg,/images/1608037130131-product_img.jpg,/images/1608037130131-product_img.jpg', 'Bahan adem terbuat dari bahan parasit', '38,39,40,41,42,43', 'blue, black', 'New', '2020-12-15 12:58:50', '2020-11-21 14:50:57'),
(3, 7, 1, 'Evos Jersey', 120000, 5, '/images/1608037164379-product_img.jpg,/images/1608037164380-product_img.jpg,/images/1608037164380-product_img.jpg,/images/1608037164381-product_img.jpg,/images/1608037164382-product_img.jpg', 'Bahan adem terbuat dari bahan parasit', 'M,L,XL', 'blue, black', 'New', '2020-12-15 12:59:24', '2020-11-23 01:12:07'),
(4, 7, 1, 'Kaos Oblong', 50000, 5, '/images/1608037306798-product_img.jpg,/images/1608037306818-product_img.jpg,/images/1608037306822-product_img.jpg,/images/1608037306847-product_img.jpg,/images/1608037306848-product_img.jpg', 'Bahan adem terbuat dari bahan parasit', 'M,L,XL', 'Black, red, white', 'New', '2020-12-15 13:01:46', '2020-11-24 07:37:23'),
(5, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-11-30 19:41:36'),
(6, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-11-30 19:41:49'),
(7, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-12-02 19:28:06'),
(8, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-11-30 19:41:50'),
(9, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-11-30 19:41:50'),
(10, 7, 1, 'Kaos Oblong', 50000, 5, '/images/1608037346030-product_img.jpg,/images/1608037346031-product_img.jpg,/images/1608037346031-product_img.jpg,/images/1608037346032-product_img.jpg,/images/1608037346032-product_img.jpg', 'Bahan adem terbuat dari bahan parasit', 'M,L,XL', 'Black, red, white', 'New', '2020-12-15 13:02:26', '2020-12-03 02:30:37'),
(11, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-12-03 02:40:18'),
(12, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-12-03 09:44:46'),
(13, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-12-07 16:49:52'),
(14, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-12-08 07:07:51'),
(15, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-12-08 16:15:40'),
(16, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-12-08 16:17:00'),
(17, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-12-08 20:04:18'),
(18, 7, 1, 'Kaos Oblong', 50000, 5, '/images/1608037351703-product_img.jpg,/images/1608037351704-product_img.jpg,/images/1608037351704-product_img.jpg,/images/1608037351705-product_img.jpg,/images/1608037351705-product_img.jpg', 'Bahan adem terbuat dari bahan parasit', 'M,L,XL', 'Black, red, white', 'New', '2020-12-15 13:02:31', '2020-12-08 20:06:00'),
(19, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-12-08 20:06:48'),
(28, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-12-14 08:24:07'),
(29, 7, 5, 'NIIKE ardile', 250000, 2, '', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:39:30', '2020-12-14 08:25:59'),
(30, 7, 5, 'NIIKE', 250000, 2, '/images/1608036358402-product_img.jpg,/images/1608036358403-product_img.jpg,/images/1608036358404-product_img.jpg,/images/1608036358407-product_img.jpg,/images/1608036358408-product_img.jpg', 'Bahan adem terbuat dari bahan parasit', 'M,L,Xl', 'Blue', 'New', '2020-12-15 12:45:58', '2020-12-14 08:37:34'),
(31, 7, 3, 'bismillah', 400000, 4, '/images/1608144295678-product_img.jpg,/images/1608144295681-product_img.jpg,/images/1608144295682-product_img.jpg,/images/1608144295683-product_img.jpg,/images/1608144295684-product_img.jpg', 'semoga bisa masuk', 'L, XL', 'white, black', 'new', '2020-12-16 18:44:55', '2020-12-16 18:44:55'),
(32, 7, 3, 'bismillah', 400000, 4, '/images/1608145124132-product_img.jpg,/images/1608145124135-product_img.jpg,/images/1608145124136-product_img.jpg,/images/1608145124138-product_img.jpg,/images/1608145124139-product_img.jpg', 'semoga bisa masuk', 'L, XL', 'white, black', 'new', '2020-12-16 18:58:44', '2020-12-16 18:58:44'),
(33, 7, 3, 'bismillah', 400000, 4, '/images/1608145187083-product_img.jpg,/images/1608145187084-product_img.jpg,/images/1608145187085-product_img.jpg,/images/1608145187086-product_img.jpg,/images/1608145187087-product_img.jpg', 'semoga bisa masuk', 'L, XL', 'white, black', 'new', '2020-12-16 18:59:47', '2020-12-16 18:59:47'),
(34, 7, 2, 'apa aja boleh', 100000, 10, '/images/1608145257675-product_img.jpg,/images/1608145257675-product_img.jpg,/images/1608145257676-product_img.jpg,/images/1608145257677-product_img.jpg,/images/1608145257678-product_img.jpg', 'semoga bisa redirect', '40', 'blue, red', 'new', '2020-12-16 19:00:57', '2020-12-16 19:00:57');

-- --------------------------------------------------------

--
-- Struktur dari tabel `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `rating`
--

INSERT INTO `rating` (`id`, `user_id`, `product_id`, `rating`) VALUES
(1, 7, 1, 5),
(2, 7, 2, 4),
(3, 7, 3, 4),
(4, 7, 4, 5),
(5, 7, 5, 4),
(6, 7, 6, 3),
(7, 7, 7, 4),
(8, 7, 8, 3),
(9, 7, 9, 5),
(10, 7, 10, 0),
(11, 7, 11, 5),
(12, 7, 12, 5),
(13, 7, 13, 5),
(14, 7, 14, 5),
(15, 7, 15, 5),
(16, 7, 16, 5),
(17, 7, 17, 5),
(18, 7, 18, 5),
(19, 7, 19, 5),
(20, 7, 20, 5),
(21, 7, 21, 5),
(22, 7, 22, 5),
(23, 7, 23, 5),
(24, 7, 24, 5),
(25, 0, 24, 5),
(26, 7, 24, 1),
(27, 7, 24, 2),
(28, 7, 28, 5),
(29, 7, 29, 2),
(30, 7, 30, 4);

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `size` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `product_id`, `quantity`, `size`, `color`, `price`) VALUES
(1, 1, 1, 1, 'M', 'white', 150000),
(2, 3, 41, 1, '40', 'Black', 350000),
(3, 1, 1, 1, 'M', 'white', 150000),
(4, 1, 68, 1, 'M', 'white', 150000),
(5, 1, 78, 1, 'M', 'white', 150000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) NOT NULL,
  `store_name` varchar(255) NOT NULL,
  `store_desc` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `level_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `phone_number`, `store_name`, `store_desc`, `password`, `photo`, `level_id`) VALUES
(7, 'Fachri', 'fachrighiffary@gmail.com', '082226068782', 'Mr Bewwok', '', '$2b$10$ZMy5o/dTd8Qu7EXv5hA6V.qzMbcg6qwsCoLVndUhk75meplsFNN0q', '', 1),
(8, 'Jokowi', 'jokowi@gmail.com', '123123123123', 'jokowok', '', '$2b$10$FFC7GzcL6i1CRqabhfSbU.q8gHAB.t1M2Pb9YwOZV71jCdoNHhek6', '', 1),
(10, 'Fachri01', 'fachri@gmail.com', '082226068782', '', '', '$2b$10$t6FyigU5YTRkQw289qIUk.1jpLBBrcDeR.CmoIwDc0aAZg9z2vbzC', '', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blacklist_token`
--
ALTER TABLE `blacklist_token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blacklist_token`
--
ALTER TABLE `blacklist_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
