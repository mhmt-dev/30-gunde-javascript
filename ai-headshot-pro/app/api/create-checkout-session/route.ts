import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const { imageId } = await req.json();

    if (!imageId) {
      return NextResponse.json(
        { error: 'Image ID is required' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'AI Professional Headshots',
              description: '6 high-quality AI-generated professional headshots',
              images: ['https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'],
            },
            unit_amount: parseInt(process.env.NEXT_PUBLIC_PRICE || '299'),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}&image_id=${imageId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/upload?canceled=true`,
      metadata: {
        imageId,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}
