INSERT INTO categories (name, description) VALUES
('Roses', 'Classic and romantic roses'),
('Lilies', 'Elegant and fragrant lilies'),
('Tulips', 'Colorful spring tulips'),
('Orchids', 'Exotic and luxurious orchids'),
('Mixed Bouquets', 'Beautiful arrangements of mixed flowers');

INSERT INTO products (name, description, price, image, stock, category_id) VALUES
('Red Rose Bouquet', 'A dozen premium red roses', 49.99, 'red-roses.jpg', 50, 1),
('Pink Rose Bundle', '20 beautiful pink roses', 59.99, 'pink-roses.jpg', 35, 1),
('White Lily Arrangement', 'Elegant white lilies in a vase', 44.99, 'white-lilies.jpg', 25, 2),
('Stargazer Lilies', '6 stunning stargazer lilies', 54.99, 'stargazer.jpg', 20, 2),
('Spring Tulip Mix', 'Colorful tulips for spring', 34.99, 'tulips.jpg', 40, 3),
('Purple Tulip Bouquet', '24 purple tulips', 39.99, 'purple-tulips.jpg', 30, 3),
('Phalaenopsis Orchid', 'Elegant white orchid plant', 79.99, 'orchid.jpg', 15, 4),
('Pink Orchid Arrangement', 'Beautiful pink orchids', 69.99, 'pink-orchid.jpg', 18, 4),
('Romantic Sunset Bouquet', 'Mixed flowers in warm tones', 54.99, 'sunset-bouquet.jpg', 25, 5),
('Garden Party Mix', 'Fresh and colorful mixed bouquet', 49.99, 'garden-party.jpg', 30, 5);

INSERT INTO users (name, email, password, role) VALUES
('Admin', 'admin@petalgram.com', '$2y$10$YourHashedPasswordHere', 'admin');
