FROM python:3.12-alpine3.17

# Install system packages needed to build Python dependencies and for healthcheck
RUN apk --no-cache add \
        build-base \
        postgresql-dev \
        libffi-dev \
        openssl-dev \
        python3-dev \
        musl-dev \
        bash \
        wget \
    && pip3 install --upgrade pip pipenv wheel virtualenv

COPY . /app
WORKDIR /app

# Create non-root user and set ownership
RUN addgroup --system bracket && adduser --system bracket --ingroup bracket \
    && chown -R bracket:bracket /app
USER bracket

# Install Python dependencies with pipenv
# Note: do not use --deploy since Pipfile.lock may not be present in forks
RUN set -ex \
    && pip3 install --upgrade pip pipenv wheel virtualenv \
    && pipenv install

EXPOSE 8400

HEALTHCHECK --interval=10s --timeout=5s --retries=5 CMD wget --spider http://localhost:8400/ping || exit 1

CMD [ \
    "pipenv", \
    "run", \
    "gunicorn", \
    "-k", "uvicorn.workers.UvicornWorker", \
    "bracket.app:app", \
    "--bind", "0.0.0.0:8400", \
    "--workers", "1" \
]
