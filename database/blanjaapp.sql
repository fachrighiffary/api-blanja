-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 20 Feb 2021 pada 05.16
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
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) NOT NULL,
  `store_name` varchar(255) DEFAULT NULL,
  `store_desc` text,
  `password` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `level_id` int(11) NOT NULL,
  `isActive` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `phone_number`, `store_name`, `store_desc`, `password`, `photo`, `level_id`, `isActive`) VALUES
(7, 'Fachri', 'fachrighiffary@gmail.com', '082226068782', 'Mr Bewwok', '', '$2b$07$rXJZJnLgyG4aRNszmrd8JurRtR6nV7skW3tDeMZvp9pd1KzfMTPvK', '', 1, 1),
(8, 'Jokowi', 'jokowi@gmail.com', '123123123123', 'jokowok', '', '$2b$10$FFC7GzcL6i1CRqabhfSbU.q8gHAB.t1M2Pb9YwOZV71jCdoNHhek6', '', 1, 0),
(10, 'Fachri01', 'fachri@gmail.com', '082226068782', '', '', '$2b$10$t6FyigU5YTRkQw289qIUk.1jpLBBrcDeR.CmoIwDc0aAZg9z2vbzC', '', 2, 1),
(11, 'ghiffary', 'ghiffary@gmail.com', '123123123123', 'kokoh', '', '$2b$10$xUsLY93.EVE0F96P/yYSreIoHJoIqXm3Juhhn.16KZJ.w8NTmkkp6', '', 1, 0),
(12, 'gundala', 'gundala@gmail.com', '123123123', '', '', '$2b$10$6PJOV6RTrM6adlKi7ItDIeJOgVEEV3aS8uH.wxfIbyI/gA8KizB3q', '', 2, 0),
(13, 'jokoko', 'jokoko@gmail.com', '', '', '', '$2b$10$g09bnGMWOqs0mWsGN62aRuSNLZr.E9ULESSDW1RHuWUmIY9MGrbFC', '', 2, 0),
(14, 'jokokowi', 'jokokowi@gmail.com', '', '', '', '$2b$10$WzHUgZ9ZlI.wsTY9dHC1n.udVvZIdd..hHDmQ/UcUifP4MkJ0.aa.', '', 2, 0),
(23, 'marionjola', 'marionjola@gmail.com', '', '', '', '$2b$10$L4gQkJZWqzDTPln9ZPLdg.9aw7z52LgGfCOJoyXw2SSW5li8Qe2v2', '', 2, 0),
(24, 'prabowo', 'prabowo@gmail.com', '', '', '', '$2b$10$gKTzFkSHjMclfyQKXp1Abu3HPX8FaxQWAwW2XxYJT1Le9/kOPMRXW', '', 2, 0),
(25, 'aliando', 'aliando@gmail.com', '', '', '', '$2b$10$q7ntECbKw3DgaORzPPhEnu3iPl4GHodNBnIbvq49fpt1.qpZ5oe32', '', 2, 0),
(27, 'heheheh', 'hehe@gmail.com', '', '', '', '$2b$10$NTaOpEgfpKDfeKv00upEjOiozFAX5DHpn5hWcF1ufqWnZkdvQCUqy', '', 0, 0),
(28, 'aku', 'aku@gmail.com', '', '', '', '$2b$10$qieO739aHkDzQTgCDrQkKePQTUWNfsYUmdjlIWdLGNfKVd6idAbJm', '', 0, 0),
(30, 'asfsdfas', 'sdfhdsfhsd@gmail.com', '', '', '', '$2b$10$0b.5JGeeyQwjeYpKGVLu9u6VljIsFbFob.Avo1wLghuzEUBGUBah2', '', 0, 0),
(35, 'sdfsdfas', 'fachri12312@gmail.com', '', '', '', '$2b$10$Wevp8cT8fHXO0iUoQ1meE.BJ.J.TFbqPo1SgVIrKIrAgv58cbYxW.', '', 0, 0),
(36, 'jiki', 'jiki@gmail.com', '', '', '', '$2b$10$6lMCwygKXVG4Y12dlwSatupRdkdjTH/C5wLxB6EgR3dl53pPPO3Uy', '', 0, 0),
(37, 'leo', 'leo@gmail.com', '', '', '', '$2b$10$v9zN4VtKMZbyqzl.NCHgh.lE50QtuhuHYUSpVZoG1rpn34ZTnjrL.', '', 2, 0),
(40, 'fachri', 'fachri001@gmail.com', '', '', '', '$2b$10$FRWY.ojLeuv.VMF0qypRoeYVYKLIHTf.XfB8n7TZpCie7CKwxldE.', '', 2, 0),
(41, 'grabToko', 'grabtoko@gmail.com', '', 'grabtoko Official', '', '$2b$10$/D132zOt6TjPVRTsrdjQeuI8DaVKrRCoTgVXQu5i5hkElwC5I255C', '', 1, 0),
(42, 'lazada', 'lazada@gmail.com', '', 'lazada Store', '', '$2b$10$ahAay19WgeHteZpZR8qemOCrATyaDXtM3ia6/Bkc3Cn3mHfiL1k4y', '', 1, 0),
(44, 'shopee', 'shopee@gmail.com', '', 'Shopee official', '', '$2b$10$5zkJl4Z2sxtQZMYO3wUzAOXU6OmiEZ/.f5IjZAxBAS4JzBk4GfTZO', '', 1, 0),
(69, 'Fachri Ghiffary', 'ghiffaryfachri@gmail.com', '678678678678', '', '', '$2b$08$GuLj9RkDtrrbxrIwfWexzO3HKPktoiVBM/.BsktjS528rEVEZ6NBq', '', 2, 1);

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
