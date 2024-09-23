// __tests__/PostCard.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostCard from '../../src/components/PostCard';
import { useRouter } from 'next/router';


describe('PostCard Component', () => {
    it('renders the post card with correct elements', () => {
        render(<PostCard />);

        // Check if the image is rendered correctly
        const image = screen.getByAltText('Blog Post Image');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/product.jpg');

        // Check if the date and category are displayed correctly
        expect(screen.getByText('10-3-2023 -')).toBeInTheDocument();
        expect(screen.getByText('style')).toBeInTheDocument();

        // Check if the title link is rendered with the correct text
        const titleLink = screen.getByRole('heading', { name: 'Blog 1' });
        expect(titleLink).toBeInTheDocument();

        // Check if the description paragraph is rendered correctly
        expect(screen.getByText(/Lorem ipsum dolor, sit amet consectetur/i)).toBeInTheDocument();

        // Check if the "Read More" link is rendered correctly
        const readMoreLink = screen.getByText('Read More');
        expect(readMoreLink).toBeInTheDocument();
        expect(readMoreLink.closest('a')).toHaveAttribute('href', '/posts/style');
    });
});
