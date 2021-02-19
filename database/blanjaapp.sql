-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 19 Feb 2021 pada 03.55
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
-- Struktur dari tabel `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address_dtl` text NOT NULL,
  `city` varchar(255) NOT NULL,
  `post_code` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `input_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `address`
--

INSERT INTO `address` (`id`, `user_id`, `address`, `name`, `address_dtl`, `city`, `post_code`, `phone_number`, `input_date`, `update_date`) VALUES
(15, 7, 'Jakarta', 'Fachri Ghiffary', 'jagakarsa, Jakarta Selatan', 'Jakart, Dki Jakrta', '12345', '082226068782', '2021-01-15 04:38:24', '2021-01-15 04:38:24'),
(16, 7, 'Office', 'Fachrighiffary', 'Kebumen, grogol beningsari, rt02/01, petnahan , kebumen', 'kebumen', '123123', '082226068782', '2021-01-18 04:09:35', '2021-01-18 04:09:35'),
(18, 40, 'Home', 'Fachri', 'Jl. Kebumen, no01, jawa tengah', 'Jawa tengah, kebumen', '12345', '123123123123', '2021-01-21 09:41:25', '2021-01-21 09:41:25'),
(19, 10, 'Jakarta', 'Fachri Ghiffary', 'jagakarsa, Jakarta Selatan', 'Jakart, Dki Jakrta', '12345', '082226068782', '2021-02-14 16:53:14', '2021-02-14 16:53:04'),
(20, 10, 'home', 'Fachri Ghiffary', 'jl.kemang no 6, mampang prapatan, jakarta selatan', 'Jakarta selatan', '12345', '123123123123', '2021-02-14 16:52:39', '2021-01-28 06:40:24'),
(23, 69, 'Kebumen', 'Ghiffary Fachri', 'jagakarsa, Jakarta Selatan', 'Jakart, Dki Jakrta', '12345', '082226068782', '2021-02-14 12:20:39', '2021-02-14 12:20:39');

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
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impva293aUBnbWFpbC5jb20iLCJsZXZlbCI6MSwiaWF0Ijo4fQ.WXGw401VmVf7PR566ASdTZo0JLNv39CCl0kmfopaDQg', '2020-12-16 14:45:31'),
(5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhY2hyaWdoaWZmYXJ5QGdtYWlsLmNvbSIsImxldmVsIjoxLCJpYXQiOjE2MTA2MTcwODB9.OFDt2iySf1h19QAuVnnRWNPPsd1ZxXT9Z2l93p0VrVw', '2021-01-14 09:38:58'),
(6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhY2hyaWdoaWZmYXJ5QGdtYWlsLmNvbSIsImxldmVsIjoxLCJpYXQiOjE2MTA2MTcwODB9.OFDt2iySf1h19QAuVnnRWNPPsd1ZxXT9Z2l93p0VrVw', '2021-01-19 17:56:48');

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
-- Struktur dari tabel `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `payment_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `payment`
--

INSERT INTO `payment` (`id`, `payment_name`) VALUES
(1, 'MasterCard'),
(2, 'Pos Indonesia'),
(3, 'Gopay');

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
(1, 7, 1, 'Kaos Polos', 75000, 10, '/images/1610213851934-product_img.jpg,/images/1610213851935-product_img.jpg,/images/1610213851935-product_img.jpg,/images/1610213851937-product_img.jpg,/images/1610213851941-product_img.jpeg', 'bahan lembut, berbeda dengan bahan kaos lain,adem, dan nyaman dipakai', 'M,L,XL,XXL', 'red, white, black, yellow', 'NEW', '2021-01-09 17:37:31', '2021-01-09 17:37:31'),
(2, 7, 1, 'Evos Jersey', 145000, 20, '/images/1610213963713-product_img.jpg,/images/1610213963715-product_img.jpg,/images/1610213963716-product_img.jpg,/images/1610213963750-product_img.jpg,/images/1610213963752-product_img.jpg', 'Bahan parasut, nyaman dan adem dipakai, cepat menyerap keringat', 'M,L,XL,XXL', 'blue, black', 'NEW', '2021-01-09 17:39:23', '2021-01-09 17:39:23'),
(3, 7, 1, 'RRQ jersey', 200000, 7, '/images/1610214045394-product_img.jpg,/images/1610214045395-product_img.jpg,/images/1610214045418-product_img.jpg,/images/1610214045430-product_img.jpg,/images/1610214045434-product_img.jpg', 'Bahan parasut, nyaman dan adem dipakai, cepat menyerap keringat', 'M,L,XL,XXL', 'black, yelow', 'NEW', '2021-01-09 17:40:45', '2021-01-09 17:40:45'),
(4, 7, 2, 'Short Pants', 59000, 30, '/images/1610214160631-product_img.jpg,/images/1610214160633-product_img.jpg,/images/1610214160634-product_img.jpg,/images/1610214160635-product_img.jpg,/images/1610214160636-product_img.jpg', 'lentur dan nyaman dipakai untuk santi', 'M,L,XL,XXL', 'brown, black, cream', 'NEW', '2021-01-09 17:42:40', '2021-01-09 17:42:40'),
(5, 7, 2, 'Celana pendek', 70000, 30, '/images/1610214238690-product_img.jpg,/images/1610214238691-product_img.jpg,/images/1610214238692-product_img.jpg,/images/1610214238695-product_img.jpg,/images/1610214238696-product_img.jpg', 'casual, dan nyaman dipakai untuk santaai', 'M,L,XL,XXL', 'brown, black, cream', 'NEW', '2021-01-09 17:43:58', '2021-01-09 17:43:58'),
(6, 7, 3, 'hoodie', 90000, 30, '/images/1610214302322-product_img.jpg,/images/1610214302381-product_img.jpg,/images/1610214302383-product_img.jpg,/images/1610214302384-product_img.jpg,/images/1610214302385-product_img.jpg', 'hangat, bahan tebal, dan tidak mudah lunutr', 'M,L,XL,XXL', 'black, pink, white, blue', 'NEW', '2021-01-09 17:45:02', '2021-01-09 17:45:02'),
(7, 7, 3, 'Jacket Parka', 250000, 20, '/images/1610214349303-product_img.jpg,/images/1610214349304-product_img.jpg,/images/1610214349308-product_img.jpg,/images/1610214349309-product_img.jpg,/images/1610214349310-product_img.jpg', 'jaket keren, nyaman dipakai,', 'M,L,XL,XXL', 'brow, black, red', 'NEW', '2021-01-09 17:45:49', '2021-01-09 17:45:49'),
(8, 7, 4, 'Cino pants', 350000, 32, '/images/1610214400768-product_img.jpg,/images/1610214400768-product_img.jpg,/images/1610214400769-product_img.jpg,/images/1610214400771-product_img.jpg', 'jaket keren, nyaman dipakai,', '29,30,31,32,33', 'black, brown,green', 'NEW', '2021-01-10 18:17:47', '2021-01-09 17:46:40'),
(9, 7, 4, 'celana pensil', 125000, 32, '/images/1610214458744-product_img.jpg,/images/1610214458747-product_img.jpg,/images/1610214458763-product_img.jpg,/images/1610214458763-product_img.jpg,/images/1610214458764-product_img.jpg', 'bahan lentur dan tidak mudah kusut bila dicuci', '29,30,31,32,33', 'black, brown, cream', 'NEW', '2021-01-09 17:47:38', '2021-01-09 17:47:38'),
(10, 7, 5, 'Nike', 450000, 12, '/images/1610214521861-product_img.jpg,/images/1610214521863-product_img.jpg,/images/1610214521865-product_img.jpg,/images/1610214521867-product_img.jpg,/images/1610214521868-product_img.jpg', 'Original asli langsung dikirim dari pabriknya', '29,30,31,32,33', 'black, red, blue', 'NEW', '2021-01-09 17:48:41', '2021-01-09 17:48:41'),
(11, 7, 5, 'Adidas', 600000, 17, '/images/1610214583346-product_img.jpg,/images/1610214583347-product_img.jpg,/images/1610214583348-product_img.jpg,/images/1610214583350-product_img.jpg,/images/1610214583351-product_img.jpg', 'Nyaman dipakai untuk running ataupun untuk kuliah, cocok untuk mahasiswa', '35,36,37,38,39,40,41,42', 'black, red, blue, grey', 'NEW', '2021-01-09 17:49:43', '2021-01-09 17:49:43'),
(12, 7, 5, 'Adipras', 120000, 17, '/images/1610713599318-product_img.jpg,/images/1610713599378-product_img.jpg,/images/1610713599431-product_img.jpg,/images/1610713599434-product_img.jpg,/images/1610713599437-product_img.jpg', 'Nyaman dipakai untuk running ataupun untuk kuliah, cocok untuk mahasiswa', '35,36,37,38,39,40,41,42', 'black, red, blue, grey', 'NEW', '2021-01-15 12:26:40', '2021-01-15 12:26:40'),
(13, 7, 5, 'Evos Esport Jersey', 120000, 17, '/images/1611171344200-product_img.jpg,/images/1611171344201-product_img.jpg,/images/1611171344202-product_img.jpg,/images/1611171344203-product_img.jpg,/images/1611171344207-product_img.jpg', 'Nyaman dipakai untuk running ataupun untuk kuliah, cocok untuk mahasiswa', 'xs, s, m , l', 'black, , blue', 'NEW', '2021-01-20 19:35:44', '2021-01-20 19:35:44'),
(14, 7, 1, 'Baju ', 120000, 10, '/images/1611197511586-product_img.jpg,/images/1611197511694-product_img.jpg,/images/1611197511866-product_img.jpg,/images/1611197512092-product_img.jpg', '', 'm,l,xl', 'black, red, blue', 'NEW', '2021-01-21 02:51:52', '2021-01-21 02:51:52'),
(15, 7, 4, 'ruangan bagus', 120000, 5, '/images/1611197613863-product_img.jpg,/images/1611197614065-product_img.jpg,/images/1611197614277-product_img.jpg,/images/1611197614368-product_img.jpg', '', 'm,l,xl', 'black, brown', 'NEW', '2021-01-21 02:53:34', '2021-01-21 02:53:34'),
(16, 7, 1, 'Bombogie', 350000, 10, '/images/1611804114890-product_img.jpg,/images/1611804114933-product_img.jpg,/images/1611804115015-product_img.jpg,/images/1611804115051-product_img.jpg,/images/1611804115116-product_img.jpg', '', 'm,l,xl', 'white, black', 'NEW', '2021-01-28 03:21:55', '2021-01-21 02:54:56'),
(17, 7, 1, 'Baju Evos', 100000, 10, '/images/1611226210280-product_img.jpg,/images/1611226210557-product_img.jpg,/images/1611226210624-product_img.jpg,/images/1611226210626-product_img.jpg', '', 'm,l,xl', 'white, green, blue', 'NEW', '2021-01-21 10:50:10', '2021-01-21 10:50:10'),
(18, 41, 1, 'Kaos Oblong', 50000, 2, '/images/1611555794079-product_img.jpg,/images/1611555794081-product_img.jpg', 'Bahan adem terbuat dari bahan parasit', 'M,L,XL', 'Black, red, white, yellow', 'New', '2021-01-25 06:23:14', '2021-01-25 01:10:36'),
(19, 41, 3, 'Barang baru', 90000, 10, '/images/1611767643214-product_img.jpg,/images/1611767643414-product_img.jpg,/images/1611767643433-product_img.jpg,/images/1611767643547-product_img.jpg,/images/1611767643551-product_img.jpg', '', 'M,L,XL', 'white, green, blue, black', 'NEW', '2021-01-27 17:14:03', '2021-01-27 17:14:03'),
(20, 7, 1, 'baju bagus', 250000, 10, '/images/1611808960694-product_img.jpg,/images/1611808960697-product_img.jpg,/images/1611808960699-product_img.jpg,/images/1611808960714-product_img.jpg', '', 'M,L, XL', 'White. Brown, black', 'NEW', '2021-01-28 04:42:40', '2021-01-28 04:42:40'),
(21, 41, 1, 'baju Polo slimfit', 150000, 10, '/images/1611815961100-product_img.jpg,/images/1611815961116-product_img.jpg', '', 'M,L,XL', 'white, green, blue, brown', 'NEW', '2021-01-28 06:39:21', '2021-01-28 06:38:54'),
(22, 41, 2, 'sdfsdfas', 120000, 12, '/images/1611817197933-product_img.jpg', '', 'm,l,xl', 'white, green, blue', 'NEW', '2021-01-28 06:59:57', '2021-01-28 06:59:57');

-- --------------------------------------------------------

--
-- Struktur dari tabel `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `comment` text NOT NULL,
  `input_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `rating`
--

INSERT INTO `rating` (`id`, `user_id`, `product_id`, `rating`, `comment`, `input_date`) VALUES
(1, 7, 1, 5, '', '2021-01-15 15:27:03'),
(2, 7, 2, 4, '', '2021-01-15 15:26:55'),
(3, 7, 3, 4, '', '2021-01-15 14:11:30'),
(4, 7, 4, 5, '', '2021-01-15 14:11:30'),
(5, 7, 5, 4, '', '2021-01-15 14:11:30'),
(6, 7, 6, 3, '', '2021-01-15 14:11:30'),
(7, 7, 7, 4, '', '2021-01-15 14:11:30'),
(8, 7, 8, 3, '', '2021-01-15 14:11:30'),
(9, 7, 9, 5, '', '2021-01-15 14:11:30'),
(10, 7, 10, 0, '', '2021-01-15 14:11:30'),
(11, 7, 11, 5, '', '2021-01-15 14:11:30'),
(38, 7, 12, 3, 'boleh nih dicoba barangnya', '2021-01-15 15:26:36'),
(39, 7, 12, 3, 'Barang keren banget', '2021-01-17 14:08:29'),
(40, 7, 12, 3, 'Dijamin ori gaes', '2021-01-17 14:08:37'),
(41, 7, 12, 3, 'kagak nyesel beli barang ini, pas dateng bagus bangettt', '2021-01-17 14:08:55'),
(42, 7, 12, 5, 'sabi bagnet nih barang', '2021-01-17 14:09:00'),
(47, 7, 2, 5, 'Barangnya bagus banget, bener-bener Samantha Kaya Yang dipakai jessno limit', '2021-01-17 14:13:54'),
(48, 7, 10, 4, 'boleh nih dicoba barangnya', '2021-01-17 14:20:52'),
(49, 7, 1, 4, 'boleh nih dicoba barangnya', '2021-01-17 14:21:00'),
(50, 7, 8, 5, 'Kalian harus beli ini gaes, recommended parah sih ini product', '2021-01-17 14:23:03'),
(51, 7, 10, 1, 'Yuk dibeli barangnya gaes, dijamin kalian game bakalan nyesel, barangnya sesuai dengan did foto', '2021-01-17 14:25:30'),
(52, 7, 8, 5, 'recommend barangnya', '2021-01-18 04:16:46'),
(53, 7, 8, 5, 'asli game nyesel believe barang ini', '2021-01-18 04:17:52'),
(54, 7, 12, 4, 'Barang nya bagus banget', '2021-01-18 04:19:07'),
(55, 7, 7, 4, 'barang bagus banget', '2021-01-21 08:45:05'),
(56, 7, 7, 5, 'barang bagus sekali', '2021-01-21 10:15:26'),
(57, 10, 18, 5, 'Barangnya bagus bangettt, recomend banget buat dibeli', '2021-01-26 18:53:20'),
(58, 10, 18, 2, 'coba deh beli barang ini', '2021-01-26 18:55:37'),
(59, 69, 22, 5, 'barang bagus bangettt', '2021-02-16 15:20:41');

-- --------------------------------------------------------

--
-- Struktur dari tabel `rating_dtl`
--

CREATE TABLE `rating_dtl` (
  `id` int(11) NOT NULL,
  `rating` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `rating_dtl`
--

INSERT INTO `rating_dtl` (`id`, `rating`) VALUES
(1, '1'),
(2, '2'),
(3, '3'),
(4, '4'),
(5, '5');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_chat`
--

CREATE TABLE `tb_chat` (
  `id` int(11) NOT NULL,
  `seller` int(11) NOT NULL,
  `buyer` int(11) NOT NULL,
  `chatRoom` varchar(255) NOT NULL,
  `sender` int(11) NOT NULL,
  `message` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tb_chat`
--

INSERT INTO `tb_chat` (`id`, `seller`, `buyer`, `chatRoom`, `sender`, `message`, `created_at`) VALUES
(1, 41, 69, 'S41B69', 69, 'apakah barang ready?', '2021-02-16 15:58:26'),
(2, 41, 69, 'S41B69', 69, 'apakah barang ready?', '2021-02-16 15:58:32'),
(3, 41, 69, 'S41B69', 69, 'apakah barang ready?', '2021-02-16 15:59:45'),
(4, 41, 69, 'S41B69', 69, 'apakah barang ready?', '2021-02-16 16:01:22'),
(5, 41, 69, 'S41B69', 69, 'apa barang ready?', '2021-02-16 16:02:56'),
(6, 41, 69, 'S41B69', 69, 'apa barang ready?', '2021-02-16 16:03:21'),
(7, 41, 69, 'S41B69', 69, 'apa barang ready?', '2021-02-16 16:05:22'),
(8, 41, 69, 'S41B69', 69, 'haloo', '2021-02-16 16:11:51'),
(9, 41, 69, 'S41B69', 69, 'halo\n', '2021-02-16 16:12:25'),
(10, 41, 69, 'S41B69', 69, 'halo', '2021-02-16 16:20:34'),
(11, 41, 69, 'S41B69', 69, 'haloo brooo\n', '2021-02-16 16:34:56'),
(12, 41, 69, 'S41B69', 69, 'apakah stock ready?', '2021-02-16 16:45:45'),
(13, 41, 69, 'S41B69', 69, 'halo', '2021-02-16 16:51:55'),
(14, 41, 69, 'S41B69', 69, 'bismillah', '2021-02-16 16:53:27'),
(15, 41, 69, 'S41B69', 69, 'halo gaes', '2021-02-16 16:54:04'),
(16, 41, 69, 'S41B69', 69, 'halo gaes\naskdufasjkd\n', '2021-02-16 16:54:12'),
(17, 7, 69, 'S7B69', 69, 'haii apakah barang ini tersedia?', '2021-02-16 21:05:24'),
(18, 7, 69, 'S7B69', 7, 'Ada boss monggi', '2021-02-16 21:06:10'),
(19, 7, 69, 'S7B69', 69, 'saya mau pesen 1 watna hijau ada?', '2021-02-16 21:07:08'),
(20, 7, 69, 'S7B69', 7, 'Ada gan, monggi', '2021-02-16 21:07:33'),
(21, 7, 69, 'S7B69', 69, 'oke saya order', '2021-02-16 21:09:48'),
(22, 7, 69, 'S7B69', 7, 'okey langsung aja ga', '2021-02-16 21:10:02'),
(23, 7, 69, 'S7B69', 7, 'monggo', '2021-02-16 21:10:56'),
(24, 7, 69, 'S7B69', 7, 'gaskeu', '2021-02-16 21:11:43'),
(25, 7, 69, 'S7B69', 7, 'okey bro?', '2021-02-16 21:11:52'),
(26, 7, 69, 'S7B69', 7, 'gimana jadi ngga?', '2021-02-16 21:11:57'),
(27, 7, 69, 'S7B69', 69, 'yaa sabar jadi boskuh', '2021-02-16 21:12:04'),
(28, 7, 69, 'S7B69', 7, 'jadi pesen ngga?', '2021-02-18 14:58:08');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_item_order`
--

CREATE TABLE `tb_item_order` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `product_img` varchar(255) NOT NULL,
  `trxId` varchar(255) NOT NULL,
  `payment` int(11) NOT NULL,
  `address` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tb_item_order`
--

INSERT INTO `tb_item_order` (`id`, `product_id`, `product_name`, `color`, `size`, `qty`, `price`, `product_img`, `trxId`, `payment`, `address`, `user_id`) VALUES
(12, 18, 'Kaos Oblong', ' red', 'M', 1, 50000, '/images/1611555794079-product_img.jpg', 'TRX1125010', 3, 19, 10),
(13, 7, 'Jacket Parka', ' red', 'XL', 1, 250000, '/images/1610214349303-product_img.jpg', 'TRX1125010', 3, 19, 10),
(14, 2, 'Evos Jersey', ' black', 'L', 1, 145000, '/images/1610213963713-product_img.jpg', 'TRX1125011', 3, 19, 10),
(15, 7, 'Jacket Parka', ' red', 'XXL', 1, 250000, '/images/1610214349303-product_img.jpg', 'TRX1125011', 3, 19, 10),
(16, 11, 'Adidas', ' red', '37', 1, 600000, '/images/1610214583346-product_img.jpg', 'TRX4038991', 3, 19, 10),
(17, 20, 'baju bagus', ' black', 'M', 1, 250000, '/images/1611808960694-product_img.jpg', 'TRX3013664', 3, 19, 10),
(18, 22, 'sdfsdfas', ' green', 'm', 1, 120000, '/images/1611817197933-product_img.jpg', 'TRX9596878', 1, 20, 10),
(19, 21, 'baju Polo slimfit', ' green', 'M', 1, 150000, '/images/1611815961100-product_img.jpg', 'TRX9273962', 1, 20, 10),
(20, 11, 'Adidas', ' blue', '35', 1, 600000, '/images/1610214583346-product_img.jpg', 'TRX9273962', 1, 20, 10),
(21, 4, 'Short Pants', ' black', 'M', 1, 59000, '/images/1610214160631-product_img.jpg', 'TRX9273962', 1, 20, 10),
(22, 21, 'baju Polo slimfit', ' brown', 'M', 1, 150000, '/images/1611815961100-product_img.jpg', 'TRX7500179', 1, 23, 69),
(23, 9, 'celana pensil', ' brown', '29', 1, 125000, '/images/1610214458744-product_img.jpg', 'TRX7500179', 1, 23, 69),
(24, 1, 'Kaos Polos', ' white', 'L', 1, 75000, '/images/1610213851934-product_img.jpg', 'TRX7500180', 2, 23, 69),
(25, 18, 'Kaos Oblong', ' red', 'L', 2, 50000, '/images/1611555794079-product_img.jpg', 'TRX7500180', 2, 23, 69),
(26, 9, 'celana pensil', ' brown', '29', 1, 125000, '/images/1610214458744-product_img.jpg', 'TRX7500180', 2, 23, 69),
(27, 11, 'Adidas', ' red', '36', 1, 600000, '/images/1610214583346-product_img.jpg', 'TRX7500180', 2, 23, 69),
(28, 6, 'hoodie', ' white', 'L', 1, 90000, '/images/1610214302322-product_img.jpg', 'TRX7500180', 2, 23, 69),
(29, 6, 'hoodie', ' blue', 'XL', 1, 90000, '/images/1610214302322-product_img.jpg', 'TRX7500180', 2, 23, 69),
(30, 16, 'Bombogie', ' black', 'm', 1, 350000, '/images/1611804114890-product_img.jpg', 'TRX276298', 1, 23, 69),
(31, 2, 'Evos Jersey', ' black', 'L', 3, 145000, '/images/1610213963713-product_img.jpg', 'TRX276298', 1, 23, 69),
(32, 7, 'Jacket Parka', ' black', 'XL', 1, 250000, '/images/1610214349303-product_img.jpg', 'TRX276298', 1, 23, 69),
(33, 21, 'baju Polo slimfit', ' blue', 'L', 1, 150000, '/images/1611815961100-product_img.jpg', 'TRX276298', 1, 23, 69);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_notif`
--

CREATE TABLE `tb_notif` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `message` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_notif_seller`
--

CREATE TABLE `tb_notif_seller` (
  `id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `message` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tb_notif_seller`
--

INSERT INTO `tb_notif_seller` (`id`, `seller_id`, `message`, `created_at`) VALUES
(5, 41, 'Anda mendapatkan pesanan dari Fachri Ghiffary, baju Polo slimfit', '2021-02-18 19:47:20'),
(14, 41, 'Anda mendapatkan pesanan dari Fachri Ghiffary, baju Polo slimfit', '2021-02-18 20:47:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_otp`
--

CREATE TABLE `tb_otp` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `otp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_otp_activation`
--

CREATE TABLE `tb_otp_activation` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `otp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tb_otp_activation`
--

INSERT INTO `tb_otp_activation` (`id`, `email`, `otp`) VALUES
(1, 'ghiffaryfachri@gmail.com', 'vUiEhf');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_transaksi`
--

CREATE TABLE `tb_transaksi` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `TrxId` varchar(255) NOT NULL,
  `payment` int(11) NOT NULL,
  `address` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `trackingNumber` varchar(255) NOT NULL,
  `ekspedisi` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tb_transaksi`
--

INSERT INTO `tb_transaksi` (`id`, `user_id`, `TrxId`, `payment`, `address`, `total`, `qty`, `trackingNumber`, `ekspedisi`, `status`, `created_at`, `updated_at`) VALUES
(26, 10, 'TRX1125010', 3, 19, 315000, 2, 'XXXXXXXXXXXXXXX-01125010', 'jne', 'Waiting', '2021-01-27 03:49:08', '2021-02-19 00:04:51'),
(27, 10, 'TRX1125011', 3, 19, 410000, 2, 'XXXXXXXXXXXXXXX-01125011', 'tiki', 'Waiting', '2021-01-27 03:50:31', '2021-02-19 00:04:05'),
(28, 10, 'TRX4038991', 3, 19, 615000, 1, 'XXXXXXXXXXXXXXX-04038991', 'j&t', 'Waiting', '2021-01-28 11:29:31', '2021-02-19 00:04:33'),
(29, 10, 'TRX3013664', 3, 19, 265000, 1, 'XXXXXXXXXXXXXXX-03013664', 'jne', 'Waiting', '2021-01-28 13:35:03', '2021-02-19 00:07:18'),
(30, 10, 'TRX9596878', 1, 20, 135000, 1, 'XXXXXXXXXXXXXXX-09596878', 'jne', 'Waiting', '2021-02-09 11:12:26', '2021-02-18 23:49:08'),
(31, 10, 'TRX9273962', 1, 20, 824000, 3, 'XXXXXXXXXXXXXXX-09273962', 'jne', 'On Delivery', '2021-02-09 14:21:05', '2021-02-19 00:23:12'),
(32, 69, 'TRX7500179', 1, 23, 290000, 2, 'XXXXXXXXXXXXXXX-07500179', 'tiki', 'Delivered', '2021-02-18 18:52:18', '2021-02-19 00:28:53'),
(33, 69, 'TRX7500180', 2, 23, 1095000, 6, 'XXXXXXXXXXXXXXX-07500180', 'j&t', 'Delivered', '2021-02-18 19:45:55', '2021-02-19 00:24:08'),
(34, 69, 'TRX276298', 1, 23, 1200000, 4, 'XXXXXXXXXXXXXXX-0276298', 'tiki', 'Delivered', '2021-02-18 20:54:26', '2021-02-19 00:20:18');

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
(15, 'markonah', 'markonal@gmail.com', '', '', '', '$2b$10$t3ZowD0Wp.pfpjO0VeJ9vOnpAK8N.bqZa62oIAZYzImxdMiBa9XdG', '', 2, 0),
(16, 'asdf', 'asdf@gmail.com', '', '', '', '$2b$10$N2Yqy6AMKiFwzw9TFMxEEe1dcD.V6UzB20atc8Lzw8Ss2iTNoB.7.', '', 2, 0),
(23, 'marionjola', 'marionjola@gmail.com', '', '', '', '$2b$10$L4gQkJZWqzDTPln9ZPLdg.9aw7z52LgGfCOJoyXw2SSW5li8Qe2v2', '', 2, 0),
(24, 'prabowo', 'prabowo@gmail.com', '', '', '', '$2b$10$gKTzFkSHjMclfyQKXp1Abu3HPX8FaxQWAwW2XxYJT1Le9/kOPMRXW', '', 2, 0),
(25, 'aliando', 'aliando@gmail.com', '', '', '', '$2b$10$q7ntECbKw3DgaORzPPhEnu3iPl4GHodNBnIbvq49fpt1.qpZ5oe32', '', 2, 0),
(26, '', '', '', '', '', '$2b$10$.du/EK4VrUd/2.wIvYOqreGYIKot5lFiKEqEvQzhQ3dDlCjoFomqG', '', 2, 0),
(27, 'heheheh', 'hehe@gmail.com', '', '', '', '$2b$10$NTaOpEgfpKDfeKv00upEjOiozFAX5DHpn5hWcF1ufqWnZkdvQCUqy', '', 0, 0),
(28, 'aku', 'aku@gmail.com', '', '', '', '$2b$10$qieO739aHkDzQTgCDrQkKePQTUWNfsYUmdjlIWdLGNfKVd6idAbJm', '', 0, 0),
(30, 'asfsdfas', 'sdfhdsfhsd@gmail.com', '', '', '', '$2b$10$0b.5JGeeyQwjeYpKGVLu9u6VljIsFbFob.Avo1wLghuzEUBGUBah2', '', 0, 0),
(35, 'sdfsdfas', 'fachri12312@gmail.com', '', '', '', '$2b$10$Wevp8cT8fHXO0iUoQ1meE.BJ.J.TFbqPo1SgVIrKIrAgv58cbYxW.', '', 0, 0),
(36, 'jiki', 'jiki@gmail.com', '', '', '', '$2b$10$6lMCwygKXVG4Y12dlwSatupRdkdjTH/C5wLxB6EgR3dl53pPPO3Uy', '', 0, 0),
(37, 'leo', 'leo@gmail.com', '', '', '', '$2b$10$v9zN4VtKMZbyqzl.NCHgh.lE50QtuhuHYUSpVZoG1rpn34ZTnjrL.', '', 2, 0),
(38, 'lia', 'lia@gmail.com', '', '', '', '$2b$10$Repahk4cofwpTI7fflBUe.wMpJ6IuW9k9Zg8w7ULLVhmqhHrM0cnG', '', 2, 0),
(40, 'fachri', 'fachri001@gmail.com', '', '', '', '$2b$10$FRWY.ojLeuv.VMF0qypRoeYVYKLIHTf.XfB8n7TZpCie7CKwxldE.', '', 2, 0),
(41, 'grabToko', 'grabtoko@gmail.com', '', 'grabtoko Official', '', '$2b$10$/D132zOt6TjPVRTsrdjQeuI8DaVKrRCoTgVXQu5i5hkElwC5I255C', '', 1, 0),
(42, 'lazada', 'lazada@gmail.com', '', 'lazada Store', '', '$2b$10$ahAay19WgeHteZpZR8qemOCrATyaDXtM3ia6/Bkc3Cn3mHfiL1k4y', '', 1, 0),
(43, 'Nn', 'Nn@gmail.com', '', 'Nn', '', '$2b$10$6kKgJe//nCOYWB8kAe/RPOePMk/HHjHpjzSnbZ22C4FBnokckFAnq', '', 2, 0),
(44, 'shopee', 'shopee@gmail.com', '', 'Shopee official', '', '$2b$10$5zkJl4Z2sxtQZMYO3wUzAOXU6OmiEZ/.f5IjZAxBAS4JzBk4GfTZO', '', 1, 0),
(69, 'Fachri Ghiffary', 'ghiffaryfachri@gmail.com', '678678678678', '', '', '$2b$08$GuLj9RkDtrrbxrIwfWexzO3HKPktoiVBM/.BsktjS528rEVEZ6NBq', '', 2, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `payment`
--
ALTER TABLE `payment`
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
-- Indexes for table `rating_dtl`
--
ALTER TABLE `rating_dtl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_chat`
--
ALTER TABLE `tb_chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_item_order`
--
ALTER TABLE `tb_item_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_notif`
--
ALTER TABLE `tb_notif`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_notif_seller`
--
ALTER TABLE `tb_notif_seller`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_otp`
--
ALTER TABLE `tb_otp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_otp_activation`
--
ALTER TABLE `tb_otp_activation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_transaksi`
--
ALTER TABLE `tb_transaksi`
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
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `blacklist_token`
--
ALTER TABLE `blacklist_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
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
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
--
-- AUTO_INCREMENT for table `rating_dtl`
--
ALTER TABLE `rating_dtl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tb_chat`
--
ALTER TABLE `tb_chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `tb_item_order`
--
ALTER TABLE `tb_item_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `tb_notif`
--
ALTER TABLE `tb_notif`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tb_notif_seller`
--
ALTER TABLE `tb_notif_seller`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `tb_otp`
--
ALTER TABLE `tb_otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tb_otp_activation`
--
ALTER TABLE `tb_otp_activation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tb_transaksi`
--
ALTER TABLE `tb_transaksi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
