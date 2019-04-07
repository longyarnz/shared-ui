import React from 'react';

export default function Error({ error, info }) {
  return (
    <section className="error">
      <h1>{error.name}</h1>
      <code>{error.message}</code>
      <code>{info.componentStack}</code>
    </section>
  )
}