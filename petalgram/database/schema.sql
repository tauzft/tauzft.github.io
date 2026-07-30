-- Create database
CREATE DATABASE IF NOT EXISTS petalgram;
USE petalgram;

-- Categories table
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    icon VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Products table
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(255),
    category_id INT,
    stock INT DEFAULT 0,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
    INDEX idx_category (category_id)
);

-- Orders table
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_number VARCHAR(20) UNIQUE NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    delivery_address TEXT,
    total_amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    payment_method VARCHAR(50) DEFAULT 'messenger',
    payment_status ENUM('pending', 'paid') DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_created (created_at)
);

-- Order items table
CREATE TABLE order_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT,
    product_name VARCHAR(100),
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL,
    INDEX idx_order (order_id)
);

-- Insert sample categories
INSERT INTO categories (name, description, icon) VALUES
('Bouquets', 'Beautiful hand-tied bouquets', '💐'),
('Roses', 'Classic roses in various colors', '🌹'),
('Potted Plants', 'Indoor plants in ceramic pots', '🪴'),
('Premium', 'Exclusive premium arrangements', '✨');

-- Insert sample products
INSERT INTO products (name, description, price, image, category_id, stock, status) VALUES
('Pink Peony Bouquet', 'Beautiful pink peonies with eucalyptus leaves', 18.00, '🌸', 1, 25, 'active'),
('Lavender Rose', 'Elegant lavender roses in a glass vase', 22.00, '🌹', 2, 20, 'active'),
('Daisy Delight', 'Fresh white daisies with greenery', 14.00, '🌼', 1, 30, 'active'),
('Violet Tulip', 'Purple tulips in a ceramic pot', 16.00, '🌷', 3, 18, 'active'),
('Orchid Elegance', 'Exotic orchid arrangement', 28.00, '🌺', 4, 12, 'active'),
('Sunflower Burst', 'Bright sunflowers with wildflowers', 20.00, '🌻', 1, 22, 'active');